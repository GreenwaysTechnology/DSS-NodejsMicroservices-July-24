require('dotenv').config()
const express = require('express')
const app = express()
const greeterMiddleware = require('./middlewares/greeter.middleware')

const PORT = process.env.PORT || 3000

//custom middleware: without any url: this middleware called for any request(get/post/delete)
//for any url (/api/user or api/customer or api/x)
app.use((req, res, next) => {
    //middleware logic
    console.log('Global Middleware logic')
    //we have to call next 
    next()
})

//Parametermized middleware
app.use(greeterMiddleware('hello'))

app.use('/api/users', require('./routers/users/user.router'))

//This middleware is for any method(get,post,delete,update) for "/"
app.use('/', (req, res, next) => {
    console.log("Home Page Middleware")
    next()
})

//This middleware is for only POST method for "/"

app.post('/', (req, res, next) => {
    console.log("Home Page POST Middleware")
    next()
})



app.get('/', (req, res) => {
    res.end('Home Page')
})
app.post('/', (req, res) => {
    res.end('POST Home Page')
})

//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})