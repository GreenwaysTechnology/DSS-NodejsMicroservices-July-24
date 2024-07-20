const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: 'TCP',
    serializer: "JSON" // not necessary to set, because it is the default
});

// /GateWayService
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    //override ApiGateWayService properties
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "hello": "greeter.sayHello",
                "hai": "greeter.sayHai",
                "greet": "greeter.sayGreet"
            }

        }, {
            path: '/admin'

        }]
    }
})

broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Hello!';
        },
        sayHai() {
            return 'Hai!';
        },
        sayGreet() {
            return 'Greet!';
        }
    }

})



async function main() {
    await broker.start();
}
main();
