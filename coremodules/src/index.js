const http = require('node:http')
const { save } = require('./services/user.service')

//create server

const server = http.createServer((req, res) => {

    let data = ''
    req.on('data', (chunk) => {
        data += chunk
    })
    req.on('end', async () => {
        res.writeHead(201, {
            'Content-Type': 'application/json',
        });
        //invoke
        const result = await save(JSON.parse(data))
        res.end(JSON.stringify({ status: result }))
    })

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