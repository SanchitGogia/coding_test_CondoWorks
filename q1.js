const fs = require('fs');
let customerNumber,accountNumber,billPeriod,billDate,billNumber,charge;
function fileparse(filename)
{   fs.readFile(filename,'utf-8',(err,data)=> {
        if (err){
            console.log("Invalid file name");
            return;
        }
        //customer and account number regex
        const regexCustAcc = /(?<=Customer no. - Account no.\n\s*)\d+\s\-\s\d+/;
        
        const customerandacc = data.match(regexCustAcc)[0].split(' - ') //array to store customer and account number
        customerNumber = customerandacc[0];
       
        accountNumber =  customerandacc[1];
        // Bill period regex
        const BP = /(?<=Bill period:\nService address: ).*/;
        
        const x = data.match(BP)[0].split(/\s\s+/);
        billPeriod = x[x.length-1];
        

        // Bill number, date and total charges
        
        const dateRegex = /(?<=Bill date: ).*/;
        const numRegex = /(?<=Bill number: )\d+/;
        const chargeRegex = /(?<=Total new charges\s+)[^\s]+/;
        billDate = data.match(dateRegex)[0];
        billNumber = data.match(numRegex)[0];
        charge = data.match(chargeRegex)[0];
        printData();
    })}
function printData(){
    console.log(`Customer Number: ${customerNumber}\nAccount Number: ${accountNumber}\nBill Period: ${billPeriod}\nBill Number: ${billNumber}\nBill Date: ${billDate}\nTotal new charges: ${charge}`);
}
    fileparse(process.argv[2]);
