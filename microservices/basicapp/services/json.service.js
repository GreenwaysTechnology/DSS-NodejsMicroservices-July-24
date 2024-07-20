const { ServiceBroker } = require('moleculer')
const POSTS = require('../mock-data/posts')

const broker = new ServiceBroker({
    serializer: "JSON"
})

broker.createService({
    name: 'posts',
    actions: {
        list(ctx) {
            return POSTS
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