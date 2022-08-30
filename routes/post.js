const express = require('express')
const app = express()
const router = express.Router()
const Post = require('../models/post.models')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.json(post)
    } catch (err) {
        res.send("Err : " + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post)
    } catch (err) {
        res.send("Err : " + err)
    }
})

router.post('/', async (req, res) => {
    const post = await new Post({
        userId: req.body.userId,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body,
    })
    try {
        const response = await post.save();
        res.json(response)
    } catch (err) {
        res.send('Err : ' + err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        post.userId = req.body.userId
        post.date = req.body.date
        post.time = req.body.time
        post.title = req.body.title
        post.body = req.body.body

        const response = await post.save()
        res.json(response)

    } catch (err) {
        res.send('Err : ' + err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const response = await post.remove()
        res.json(response)
    } catch (err) {
        res.send('Err : ' + err)
    }
})


module.exports = router