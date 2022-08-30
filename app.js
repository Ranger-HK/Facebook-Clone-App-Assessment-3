const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/users')
const post = require('./routes/post')

const app = express()
const port = 4000

const url = 'mongodb://localhost/express'

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log("MongoDB Connected")
})

app.use(express.json())
app.use('/users', users)
app.use('/post', post)


app.listen(port, () => {
    console.log(`app starting on ${port}`);
})