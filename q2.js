const puppeteer = require('puppeteer');
async function browserInst(){
    const browser =  await puppeteer.launch({headless: false, slowMo: 75, defaultViewport: null});
    let page = await browser.newPage();
    await page.goto('https://app-dev.condoworks.co/');
    //return browser;
    await page.type('#Email','coop.test@condoworks.co');
    await page.type('#Password','MyTesting711');
    await Promise.all([
        page.click('#btnSubmit'),
        page.waitForNavigation(),
        ]);
    await page.goto('https://app-dev.condoworks.co/invoices/all');
    await page.waitForFrame();
    //const htmlString = await page.content();
    //console.log(htmlString);
    /*await Promise.all([
        page.type('#gs_invoices.InvoiceNumber','123'),
        page.waitForNavigation(),
        ]);*/
    console.log("hello");
    const f = await page.frames();
    //console.log(f[0]);
    const textfield = await f[0].$('#gs_invoices.InvoiceNumber');
    console.log(textfield);
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
