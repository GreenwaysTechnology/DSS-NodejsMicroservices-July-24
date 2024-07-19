const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter:"TCP",
//     //nodeID:"Adder"
// })

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
})

broker.createService({
    name: 'adder',
    actions: {
        add: {
            //validation rules
            params: {
                x: "number",
                y: { type: "number", positive: true, integer: true }

            },
            handler(ctx) {
                return `${ctx.params.x} + ${ctx.params.y} from ${ctx.nodeID}`
            }
        }
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
