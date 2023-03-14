// @ts-nocheck
const fs = require("fs")

fs.unlink("FS Module/writeFile.txt",err => {
    if(err){
        console.log(err)
    }
    else{
        console.log("File Deleted Successfully")
    }
})