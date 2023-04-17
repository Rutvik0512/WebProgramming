const express=require("express")
const app=express();
app.usw(express.json())
app.get("/",(req,res)=> {
res.send("welcome to rest api crud develepment");
});
app.listen(3000,"localhost",()=>{
    console.log("server listening at port 3000...");
});