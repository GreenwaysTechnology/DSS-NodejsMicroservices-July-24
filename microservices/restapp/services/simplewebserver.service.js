const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    logger: 'Console',
    cacher: 'Memory',
    transporter: 'TCP'
})


broker.createService({
    name: 'ApiGateWay',
    mixins:[ApiGateWay]
})


async function main() {
    try {
        await broker.start()
        // broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()