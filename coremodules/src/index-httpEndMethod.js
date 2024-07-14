const http = require('node:http')

//create server

const server = http.createServer((req, res) => {
    res.end('hello')
})

//start server
server.listen(3000, () => {
    console.log('Server is Ready')
})