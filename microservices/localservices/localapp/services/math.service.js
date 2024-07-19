const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    version: 1,
    actions: {
        add: {
            //validation rules
            params: {
                x: "number",
                y: { type: "number", positive: true, integer: true }

            },
            handler(ctx) {
                return ctx.call('adder.add', { x: ctx.params.x, y: ctx.params.y })
            }
        }
    }
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
                return ctx.params.x + ctx.params.y
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