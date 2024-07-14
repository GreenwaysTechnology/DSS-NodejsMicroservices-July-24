const http = require('node:http')

//create server

const server = http.createServer((req, res) => {
    //handle client request and send response
    res.write('Hello')
    res.end()
})

//start server
server.listen(3000, () => {
    console.log('Server is Ready')
})