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
})