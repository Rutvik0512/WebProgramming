// @ts-nocheck
const fs = require("fs");

if(fs.existsSync("FS Module/Mydir/readFile.txt")){
    fs.readFile("FS Module/Mydir/readFile.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            fs.writeFile("FS Module/writeFile.txt",data,err => {
                if(err){
                    console.log(err);
                }
            })
        }
    })
}
else{
    console.log("readFile.txt is not found")
}
