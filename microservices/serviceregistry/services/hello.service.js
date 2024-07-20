const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
    transporter: 'TCP',
    registry: {
        discoverer: "Local"
    }
})

broker.createService({
    name: 'hello',
    actions: {
        hello() {
            return "hello"
        }
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