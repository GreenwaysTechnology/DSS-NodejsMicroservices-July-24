const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require('moleculer-web')

const broker = new ServiceBroker({
    transporter:"TCP",
    registry: {
        discoverer: "Local",
        strategy: "RoundRobin"
    }
});



broker.createService({
    name: 'posts',
    actions: {
        //GET ALL products
        list: {
            rest: "GET /",
            async handler(ctx) {
                //return ctx.
                console.log('node ID : ',ctx.nodeID)
                const posts = await ctx.call('postsdb.find')
                return posts
            }
        },

        //save
        create: {
            rest: "POST /",
            async handler(ctx) {
                const { title, content, votes } = ctx.params
                const res = await ctx.call("postsdb.create", {
                    title: title,
                    content: content,
                    votes: votes
                })
                console.log(res)
                return `Post created ${broker.nodeID}`
            }
        },
        //start adding other options

    }
})


broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "REST posts": "posts"
            }
        }]
    }
})


async function init() {
    try {
        await broker.start();
        broker.repl()
    }
    catch (e) {
        log(e);
    }
}
init();