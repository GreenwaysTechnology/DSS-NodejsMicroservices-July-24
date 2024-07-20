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
                return ctx.params.x + ctx.params.y
            }
        }
    }
})

broker.createService({
    name: 'math',
    version: 2,
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
        },
        multiply: {
            //validation rules
            params: {
                x: "number",
                y: { type: "number", positive: true, integer: true }

            },
            handler(ctx) {
                return ctx.params.x * ctx.params.y
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