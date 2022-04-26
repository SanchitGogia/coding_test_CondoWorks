const puppeteer = require('puppeteer');
const path = require("path");
const outputPath = path.resolve('./invoice'); // custom download path
async function browserInst(){
    // Initializing the browser and opening the home page
    const browser =  await puppeteer.launch({headless: true, slowMo: 75, defaultViewport: null});
    let page = await browser.newPage();
    await page.goto('https://app-dev.condoworks.co/');
    

    // Logging in with the credentials
    await page.$eval('[name="Email"]',field=>field.value = 'coop.test@condoworks.co');
    
    
    await page.$eval('#Password',field=>field.value = 'MyTesting711');
    await Promise.all([
        page.click('#btnSubmit'),
        page.waitForNavigation(),
        ]);
    
    // Navigating to invoice->all
    await page.goto('https://app-dev.condoworks.co/invoices/all');
    
    // Waiting for the DOM elements to load and searching for our desired invoice number (123 in this case)
    await page.waitForSelector('[name="invoices.InvoiceNumber"]');
    await page.type('[name="invoices.InvoiceNumber"]','123');
    const handle1 = await page.$('#grid4e095c51a3223459378644ddcd24b1473');
    const handlearray = await handle1.$$('[role="row"]');

    
    // Async function to find the correct invoice and download it
    handlearray.forEach(async (element)=>{
        let handleval = await element.$('[title="123444"]'); // checks for elementhandler with the specified title
        if(handleval!= null){ 
            const buttonEl = await element.$('[title="View/Edit"]'); // if it exists, navigate to the invoice viewer
            
            const invoiceLink = await page.evaluate(anchor => anchor.getAttribute('href'), buttonEl);
            await page.goto(invoiceLink);
            // setting our custom download path
            await page._client.send('Page.setDownloadBehavior',{
                behavior: 'allow',
                downloadPath: outputPath
            });
            // downloading file and waiting for around 10 seconds, then closing the browser
            await page.click('[title="Download file"]');
            await page.waitForTimeout(10000);
            browser.close();
            console.log(`File saved in: ${outputPath}`);
        }
        
    })
    
    
}
browserInst();
