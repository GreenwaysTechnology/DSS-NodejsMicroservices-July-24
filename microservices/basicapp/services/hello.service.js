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


async function main() {
    try {
        await broker.start()
        console.log('Broker is ready')
        //invoke service
        const response = await broker.call('hello.sayHello')
        console.log(response)
    }
    catch (err) {
        console.log(err)
    }
}
main()