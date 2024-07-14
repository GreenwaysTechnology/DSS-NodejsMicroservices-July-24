const express = require('express')
// console.log(express)

//create app object
const app = express()
//entry point of your app.

//apis - url , http method

app.get('/', (req, res) => {
    res.end('Home Page')
})
app.get('/api/hello', (req, res) => {
    res.end('Hello get')
})
app.post('/api/hello', (req, res) => {
    res.end('Hello post')
})
app.put('/api/hello', (req, res) => {
    res.end('Hello update')
})
app.delete('/api/hello', (req, res) => {
    res.end('Hello delete')
})
//start server
app.listen(3000, () => {
    console.log('Express server is running')
})