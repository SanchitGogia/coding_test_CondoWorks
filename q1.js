const fs = require('fs');
fs.readFile('test-q1.txt','utf-8',(err,data)=> {
    if (err){
        console.log(err);
        return;
    }
    const regex = /(?<=Customer no. - Account no.\n\s*)\d+\s\-\s\d+/;
    console.log(data.match(regex)[0].split(' - '));
    //console.log(data[data.search(regex)]);
})