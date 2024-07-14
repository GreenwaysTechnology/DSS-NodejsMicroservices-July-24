const express = require('express')
const { findAll } = require('../../services/user.service')

//create Router
const UserRouter = express.Router()

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


module.exports = UserRouter;