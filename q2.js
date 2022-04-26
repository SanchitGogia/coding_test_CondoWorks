const puppeteer = require('puppeteer');
const path = require("path");
const outputPath = path.resolve('./invoice');
async function browserInst(){
    
    const browser =  await puppeteer.launch({headless: true, slowMo: 75, defaultViewport: null});
    let page = await browser.newPage();
    await page.goto('https://app-dev.condoworks.co/');
    //return browser;
    await page.type('[name="Email"]','coop.test@condoworks.co');
    
    //lol.type('123');
    await page.type('#Password','MyTesting711');
    await Promise.all([
        page.click('#btnSubmit'),
        page.waitForNavigation(),
        ]);
    await page.goto('https://app-dev.condoworks.co/invoices/all');
    await page.waitForSelector('[name="invoices.InvoiceNumber"]');
    await page.type('[name="invoices.InvoiceNumber"]','123');
    const handle1 = await page.$('#grid4e095c51a3223459378644ddcd24b1473');
    const handlearray = await handle1.$$('[role="row"]');

    console.log("hello");
    //console.log(sizeof(handlearray));
    handlearray.forEach(async (element)=>{
        let handleval = await element.$('[title="123444"]');
        if(handleval!= null){
            const buttonEl = await element.$('[title="View/Edit"]');
            //console.log(buttonEl);
            const invoiceLink = await page.evaluate(anchor => anchor.getAttribute('href'), buttonEl);
            await page.goto(invoiceLink);
            await page._client.send('Page.setDownloadBehavior',{
                behavior: 'allow',
                downloadPath: outputPath
            });
            await page.click('[title="Download file"]');
            await page.waitForTimeout(10000);
            browser.close();

        }
        //browser.close();
    })
    
    
}
browserInst();
