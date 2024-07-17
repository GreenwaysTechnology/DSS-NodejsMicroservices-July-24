const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const DATABASE_URL = "mongodb+srv://subugee:subugee222@cluster0.shfpbhv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=Cluster0"

const app = express()
app.use(cors())
app.use(bodyParser.json())

async function connect() {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log('database is connected')
        app.listen(3000, () => {
            console.log('Express is ready')
        })
    }
    catch (err) {
        console.log(err)
    }
}
connect()

//User model
const schema = mongoose.Schema({ username: String, password: String })
const User = mongoose.model("User", schema)

const SECRET_KEY = "a23nE"

//middleware for authorization
const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization
    if (!token) return res.status(401).send("Request Denied")
    try {
        const verified = await jwt.verify(token, SECRET_KEY)
        req.user = verified
        console.log(req.user)
        next()
    }
    catch {
        res.status(401).send("Invaild Token")
    }

}

//signup -user registration

app.post('/signup', async (req, res) => {
    const { username, password } = req.body

    try {
        //hash the password
        const hashPassword = await bcrypt.hash(password, 10)
        //store the user into db
        const user = new User({ username, password: hashPassword })
        await user.save()
        res.status(201).send("User Registred")
    }
    catch {
        res.status(500).send("User Registration failed")
    }
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body
    //verify the given user name is available in the db
    const user = await User.findOne({ username: username })
    if (!user) {
        return res.status(400).send("User not found")
    }
    //Compare the stored password against 
    const vaildPassoword = await bcrypt.compare(password, user.password)

    if (!vaildPassoword) return res.status(400).send("password invalid")

    //Generate JWT token for user interaction: auth
    //if valid user 
    const token = jwt.sign({ username: user.username }, SECRET_KEY)
    res.status(200).send(token)
})

app.get("/profile", verifyToken, (req, res) => {
    res.send(`Welcome to ${req.user.username}`)
})

