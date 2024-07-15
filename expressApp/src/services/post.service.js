const Post = require('../models/Post')

class PostService {

    //apis 
    async findAll() {
        return await Post.find()
    }

    async save({ title, content }) {
        const post = new Post({
            title,
            content
        });
        await post.save();
        return post
    }
    async findById(id) {
        const post = await Post.findOne({ _id: id });
        console.log(post)
        return post
    }

    async update(id, { title, content }) {
        const post = await Post.findOne({ _id: id });

        if (!post) {
            throw Error()
        }

        if (title) {
            post.title = title;
        }

        if (content) {
            post.content = content;
        }

        await post.save();
        return post;

    }

    async remove(id) {
        const post = await Post.findOne({ _id: id });
        if (post) {
            await Post.deleteOne({ _id: id });
        } else {
            throw Error()
        }

    }



}

module.exports = new PostService()