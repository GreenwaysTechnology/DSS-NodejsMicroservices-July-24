const http = require('node:http')
const { findAll } = require('./services/user.service')

//create server

const server = http.createServer(async (req, res) => {

    try {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        const users = await findAll()
        res.end(users)
    }
    catch (err) {
        res.writeHead(400, {
            'Content-Type': 'application/json',
        });
        res.end({ err: err })
    }
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