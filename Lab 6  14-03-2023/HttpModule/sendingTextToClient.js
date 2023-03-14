// @ts-nocheck
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Requester Url: '+ req.url)
    res.writeHead(200,{
        'Content-Type': 'text/html'
    })
    res.write('<h1> Sending text in html format</h1>')
    res.write('<style="font-color":"red"> HaHa </style>')
    res.end()
})

server.listen(8080,'127.0.0.1', ()=> (
    console.log('Server listening to port 8080')
))

