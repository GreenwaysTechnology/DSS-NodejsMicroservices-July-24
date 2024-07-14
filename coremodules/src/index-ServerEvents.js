const http = require('node:http')

//create server

const server = http.createServer((req, res) => {
    res.end('hello')
})

//start server
server.listen(3000, () => {
    console.log('Server is Ready')
})

//attac server listener
server.on('request', (req, res) => {
    //console.log(req)
    console.log('Request Recived on', new Date(), "URL is", req.url, "method ", req.method)
})