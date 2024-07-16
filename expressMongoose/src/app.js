require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())


//connect to mongodb
async function connectDb() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Mongo is connected")

        const server = app.listen(PORT, () => {
            console.log(server.address())
            console.log(`Express is running @ ${server.address().port}`)
        })

    }
    catch (e) {
        console.log(e)
    }
}
connectDb()

app.use("/api/posts", require("./routers/post.router"))

app.get('/', (req, res) => {
    res.end('Home Page')
})


