const express = require('express')
const { findAll, save, findById } = require('../../services/post.service');
const { update } = require('../../services/post.service');
const { remove } = require('../../services/post.service');

//create Router
const PostRouter = express.Router()

//api
PostRouter.get('/', async (req, res) => {
    try {
        const posts = await findAll();
        res.json(posts)
    }
    catch (err) {
        res.json({ err: err })
    }
})

PostRouter.post("/", async (req, res) => {
    const post = req.body
    try {
        const savedPost = await save(post);
        res.status(201).json(savedPost)
    }
    catch (err) {
        res.json({ err: err })
    }
});

PostRouter.get("/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const post = await findById(id);
        res.status(200).json(post)
    }
    catch (err) {
        res.status(404);
        res.send({ error: "Post doesn't exist!" });
    }
});
PostRouter.patch("/:id", async (req, res) => {
    const postInput = req.body
    const id = req.params.id

    try {
        const post = await update(id, postInput)
        res.json(post);
    } catch {
        res.status(404);
        res.send({ error: "Post doesn't exist!" });
    }
});


PostRouter.delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
        await remove(id)
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({ error: "Post doesn't exist!" });
    }
});



module.exports = PostRouter;