const Post = require('../models/Post.model')

class PostService {

    //curd operations

    async findAll() {
        return await Post.find()
    }
    async findById(id) {
        const post = await Post.findOne({ _id: id })
        return post
    }
    // async save(post) {
    //     const newPost = new Post({
    //         title: post.title,
    //         content: post.content
    //     })
    //     await newPost.save()
    //     return newPost
    // }
    async save({ title, content }) {
        // const newPost = new Post({
        //     title: title,
        //     content: content
        // })
        const newPost = new Post({
            title,
            content
        })
        await newPost.save()
        return newPost
    }
    async update(id, { title, content }) {
        const post = await Post.findOne({ _id: id })
        if (!post) {
            throw Error()
        }
        if (title) {
            post.title = title
        }
        if (content) {
            post.content = content
        }
        await post.save()
        return post
    }
    async remove(id) {
        const post = await Post.findOne({ _id: id })
        if (post) {
            await Post.deleteOne({ _id: id })
        } else {
            throw Error()
        }
    }
}
module.exports = new PostService();