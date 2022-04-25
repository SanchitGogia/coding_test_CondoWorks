const fs = require('fs');
fs.readFile('test-q1.txt','utf-8',(err,data)=> {
    if (err){
        console.log(err);
        return;
    }
    //customer and account number
    //const regexCustAcc = /(?<=Customer no. - Account no.\n\s*)\d+\s\-\s\d+/;
    //console.log(data.match(regex)[0].split(' - '));
    
    // Bill period
    //const regex = /(?<=Bill period:\nService address: ).*/;
    /*console.log(data.match(regex)[0].split(/\s\s+/));
    const x = data.match(regex)[0].split(/\s\s+/);
    console.log(x[x.length-1]);*/
    //console.log(data[data.search(regex)]);

    // Bill number, date and total charges
    
    const regex1 = /(?<=Bill date: ).*/;
    const regex2 = /(?<=Bill number: )\d+/;
    const regex3 = /(?<=Total new charges\s+)[^\s]+/;
    console.log(`${data.match(regex1)[0]} ${data.match(regex2)[0]} ${data.match(regex3)[0]}`);
})