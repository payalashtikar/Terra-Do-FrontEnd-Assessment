const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const Secret_Key = process.env.SECRET_KEY;

// POST - REGISTER
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: "Please fill all fields" })
        }
        // checking user email already exist or not , if yes then dont create user
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ error: "User already present" })
        }
        // hashing original password
        const hashedPassword = await bcrypt.hash(password, 10)
        // creating user
        const newUser = new User({ username, email, password: hashedPassword })
        await newUser.save()
        return res.status(200).json({ message: "User created", newUser })
    }
    catch (error) {
        return res.status(400).json({ error: "error", error })
    }
})

// GET - REGISTER
router.get('/signup', async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(400).json({ message: users })
    }
    catch (error) {
        return res.status(400).json({ error: "error", error })
    }
})

// POST - LOGIN 
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // check user exist or not
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ error: "User does not exist." })
        }

        // compare password 
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid Credential" })
        }

        // set token
        const token = jwt.sign({ userId: user._id }, Secret_Key, { expiresIn: '48hr' })
        res.status(200).json({ message: "User Login Success", token })
    }
    catch (error) {
        res.status(500).json({ error: "login error", error })
    }
})


module.exports = router;