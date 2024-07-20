const { ServiceBroker } = require('moleculer')

// Create broker
let broker = new ServiceBroker();



async function main() {
    try {
        // Load service
        broker.loadService("./services/math.service");
        // Start broker
        broker.start();
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()