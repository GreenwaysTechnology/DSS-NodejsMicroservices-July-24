const { ServiceBroker } = require('moleculer')

//create broker object
const broker = new ServiceBroker({
    logger: [
        {
            type: "Console",
            options: {
                level: "info",
            }
        },
        {
            type: "File",
            options: {
                level: "info",
                folder: "/logs/moleculer",
                filename: "all-{date}.log",
                formatter: "{timestamp} {level} {nodeID}/{mod}: {msg}"
            }
        }]
})

//create service
broker.createService({
    name: 'hello',
    //biz logic 
    actions: {
        //methods
        sayHello() {
            //log
            //console.log("say Hello is called")
            this.logger.info("Say Hello is called")
            return "Hello"
        }
    }
})


async function main() {
    try {
        await broker.start()
        console.log('Broker is ready')
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()