const express = require('express')
const { findAll } = require('./services/user.service')
require('dotenv').config()

const app = express()

//console.log(process.env.PORT)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.end('Home Page')
})
app.get('/api/users', async (req, res) => {
    try {
        const users = await findAll();
        res.json(users)
    }
    catch (err) {
        res.json({ err: err })
    }
})
app.get('/api/customers', async (req, res) => {
    try {
        const customers = await findAll();
        res.json(customers)
    }
    catch (err) {
        res.json({ err: err })
    }
})
//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})