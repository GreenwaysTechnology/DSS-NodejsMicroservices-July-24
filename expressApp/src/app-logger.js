require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')


const PORT = process.env.PORT || 3000

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

//register bodyparserMiddleware
app.use(bodyParser.json())
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(morgan('combined', { stream: accessLogStream }))

// app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/users', require('./routers/users/user.router'))


app.get('/', (req, res) => {
    res.end('Home Page')
})


//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})