require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

//bind Router with Application Object
// app.use('/api/users',UserRouter)
app.use('/api/users', require('./routers/users/user.router'))


app.get('/', (req, res) => {
    res.end('Home Page')
})


//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})