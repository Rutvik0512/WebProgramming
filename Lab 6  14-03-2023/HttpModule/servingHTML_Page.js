// @ts-nocheck
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log('Requester Url: '+ req.url)
    res.setHeader('Content-Type','text/html')
    res.statusCode = 200
    fs.readFile('HttpModule/Index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end()
        }
        else{
            res.write(data);
            res.end()
        }
    })
})

server.listen(8080,'127.0.0.1', ()=> (
    console.log('Server listening to port 8080')
))

