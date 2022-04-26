const puppeteer = require('puppeteer');
async function browserInst(){
    const browser =  await puppeteer.launch({headless: false, slowMo: 75, defaultViewport: null});
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
    
    console.log("hello");
    //const htmlString = await page.content();
    //console.log(htmlString);
    /*await Promise.all([
        page.type('#gs_invoices.InvoiceNumber','123'),
        page.waitForNavigation(),
        ]);*/
    console.log("hello");
    //const f =  page.frames();
    //console.log(f[0]);
    //const textfield = await f.$('#gs_invoices.InvoiceNumber');
    //console.log('textfield');
    //await page.type('#gs_invoices.InvoiceNumber','123');
    /*data = await page.evaluate(()=>{
        let results = []
        let items = document.querySelectorAll('.jqgrow ui-row-ltr')
        items.forEach((item)=>{
            console.log(item);
        })
    })*/
}
browserInst();
