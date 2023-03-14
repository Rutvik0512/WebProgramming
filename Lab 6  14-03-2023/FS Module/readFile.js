// @ts-nocheck
const fs = require("fs")

if(fs.existsSync("FS Module/readFile.txt")){
    fs.readFile("FS Module/readFile.txt","utf-8",(err,data) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
}