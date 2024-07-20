const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    created(broker) { 
        console.log('broker is created')
    },

    started(broker) { 
        console.log('broker is started')
    },

    stopped(broker) { 
        console.log('broker stopped')
    }
})

broker.createService({
    name: 'math',
    actions: {
        //public method
        multiply: {
            handler(ctx) {
                const { a, b } = ctx.params
                return this.multiply(a, b)
            }
        }
    },
    methods: {
        multiply(a, b) {
            console.log('private methods')
            return a * b
        }
    },
    created() {
        // Fired when the service instance created (with `broker.loadService` or `broker.createService`)
        console.log('Service is created')
    },

    merged() {
        // Fired after the service schemas merged and before the service instance created
        console.log('service is merged')
    },

    async started() {
        // Fired when broker starts this service (in `broker.start()`)
        console.log('service started')
    },
    async stopped() {
        // Fired when broker stops this service (in `broker.stop()`)
        console.log('service stopped')
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