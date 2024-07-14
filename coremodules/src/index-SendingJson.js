const http = require('node:http')

//create server

const server = http.createServer((req, res) => {
    const body = [{
        message: 'Hello'
    }, {
        message: 'Hai'
    }]
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(body))
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