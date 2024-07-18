const { ServiceBroker } = require('moleculer')

//create broker object
const broker = new ServiceBroker()

//create service
broker.createService({
    name: 'greet',
    //biz logic 
    actions: {
        //methods
        sayHello(ctx) {
            return `Hello ${ctx.params.name}`
        },
        sayHai(ctx) {
            return `Hai ${ctx.params.name}`
        }
    }
})


async function main() {
    try {
        await broker.start()
        console.log('Broker is ready')
        //invoke service
        const hello = await broker.call('greet.sayHello', { name: 'Subramanian' })
        const hai = await broker.call('greet.sayHai', { name: 'Subramanian' })
        console.log(hello, hai)
    }
    catch (err) {
        console.log(err)
    }
}
main()