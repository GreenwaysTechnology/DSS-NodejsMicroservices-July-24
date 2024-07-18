const { ServiceBroker } = require('moleculer')

//create broker object
const broker = new ServiceBroker()

//create service
broker.createService({
    name: 'greet',
    //biz logic 
    actions: {
        //methods
        sayHello() {
            return "Hello"
        },
        sayHai() {
            return "hai"
        }
    }
})


async function main() {
    try {
        await broker.start()
        console.log('Broker is ready')
        //invoke service
        const hello = await broker.call('greet.sayHello')
        const hai = await broker.call('greet.sayHai')
        console.log(hello,hai)
    }
    catch (err) {
        console.log(err)
    }
}
main()