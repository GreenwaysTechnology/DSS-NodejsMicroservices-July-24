const { ServiceBroker } = require('moleculer')
const POSTS = require('../mock-data/posts')

const broker = new ServiceBroker({
    serializer: "JSON"
})

broker.createService({
    name: 'postclient',
    actions: {
       async list(ctx) {
           return await ctx.call('posts.list')
        }
    }
})

broker.createService({
    name: 'posts',
    actions: {
        list(ctx) {
            return new this.Promise((resolve, reject) => {
                setTimeout(resolve, 5000, POSTS)
            })
        }
    }
})


async function main() {
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()