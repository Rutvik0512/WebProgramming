                                                             // @ts-nocheck
const fs = require("fs")

if(!fs.existsSync("FS Module/Mydir")){
    fs.mkdir("FS Module/Mydir",(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Directory Created")
        }
    })
}
else{
    console.log("Directory already created")
}
