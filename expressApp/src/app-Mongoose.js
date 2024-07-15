require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose"); // new

app.use(express.json())

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Mongoose connected")
}).catch(err => console.log(err))

const PORT = process.env.PORT || 3000

app.use('/api/users', require('./routers/users/user.router'))
app.use('/api/posts', require('./routers/posts/post.router'))


app.get('/', (req, res) => {
    res.end('Home Page')
})


//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})