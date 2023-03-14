// @ts-nocheck
const http = require("http")

const server = http.createServer((req,res) =>{
    console.log('Request Url: '+ req.url)
    res.writeHead(200,{
        'Content-Type' : 'plainText'
    })
    res.write('HaHa')
    res.end()
})

server.listen(8080,'127.0.0.1', () => {
    console.log('Server is listening to port 8080')
})