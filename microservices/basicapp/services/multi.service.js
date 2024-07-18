const { ServiceBroker } = require('moleculer')

//create broker object
const broker = new ServiceBroker()

//create service
broker.createService({
    name: 'hello',
    //biz logic 
    actions: {
        //methods
        sayHello() {
            return "Hello"
        }
    }
})
broker.createService({
    name: 'hai',
    //biz logic 
    actions: {
        //methods
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
        const hello = await broker.call('hello.sayHello')
        const hai = await broker.call('hai.sayHai')
        console.log(hello)
        console.log(hai)

    }
    catch (err) {
        console.log(err)
    }
}
main()