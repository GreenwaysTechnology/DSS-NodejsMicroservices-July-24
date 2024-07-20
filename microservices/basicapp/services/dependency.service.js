const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'comments',
    actions: {
        //public method
        getUser: {
            handler(ctx) {
                 return 'comments'
            }
        }
    },
     created() {
        // Fired when the service instance created (with `broker.loadService` or `broker.createService`)
        console.log('comments Service is created')
    },

    merged() {
        // Fired after the service schemas merged and before the service instance created
        console.log(' comments service is merged')
    },

    async started() {
        // Fired when broker starts this service (in `broker.start()`)
        console.log('comments service started')
    },
    async stopped() {
        // Fired when broker stops this service (in `broker.stop()`)
        console.log('comments service stopped')
    }
})

broker.createService({
    name: 'user',
    dependencies: ["comments"],
    actions: {
        //public method
        getUser: {
            handler(ctx) {
                 return 'user'
            }
        }
    },
     created() {
        // Fired when the service instance created (with `broker.loadService` or `broker.createService`)
        console.log('user Service is created')
    },

    merged() {
        // Fired after the service schemas merged and before the service instance created
        console.log(' user service is merged')
    },

    async started() {
        // Fired when broker starts this service (in `broker.start()`)
        console.log('user service started')
    },
    async stopped() {
        // Fired when broker stops this service (in `broker.stop()`)
        console.log('user service stopped')
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