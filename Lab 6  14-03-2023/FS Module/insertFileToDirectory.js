// @ts-nocheck
const fs = require("fs")

if(fs.existsSync("FS Module/Mydir")){
    fs.readFile("FS Module/Mydir/readFile.txt","utf-8",(err,data) => {
        if(err){
            console.log("Error in reading the File")
        }
        else{
            fs.writeFile("./Mydir/writeFile.txt",data,err => {
                if(err){
                    console.log(err)
                }
                else{
                    console.log("File inserted Successfully")
                }
            })
        }
    })
}
else{
    console.log("Directory not found")
}