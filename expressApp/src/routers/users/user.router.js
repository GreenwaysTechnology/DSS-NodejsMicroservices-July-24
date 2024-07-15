const express = require('express')
const { findAll, findById, save } = require('../../services/user.service')

//create Router
const UserRouter = express.Router()

//UserRouter middleware
UserRouter.use((req, res, next) => {
    console.log("User Router Globale Middleware")
    next()
})
UserRouter.post('/', (req, res, next) => {
    console.log("User Router Post Middleware")
    next()
})
//api
UserRouter.get('/', async (req, res) => {
    try {
        const users = await findAll();
        res.json(users)
    }
    catch (err) {
        res.json({ err: err })
    }
})

UserRouter.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const user = await findById(id);
        if (!user) {
            return res.json({ messgae: 'User Not Found' })
        }
        res.json(user)
    }
    catch (err) {
        res.json({ err: err })
    }
})

//here code receives input as plain string, not json standard string
UserRouter.post('/', async (req, res) => {
    try {
        let data = ''
        req.on('data', (chunk) => {
            data += chunk
        })
        req.on('end', async () => {
            const user = await save(data);
            res.json(user)
        })
    }
    catch (err) {
        res.json({ err: err })
    }
})

UserRouter.post('/', async (req, res) => {
    try {
        let data = ''
        req.on('data', (chunk) => {
            data += chunk
        })
        req.on('end', async () => {
            const user = await save(data);
            res.json(user)
        })
    }
    catch (err) {
        res.json({ err: err })
    }
})


module.exports = UserRouter;