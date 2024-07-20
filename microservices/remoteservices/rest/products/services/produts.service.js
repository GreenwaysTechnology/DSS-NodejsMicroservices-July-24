const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
    transporter: 'TCP'
})
const PRODUCTS = [{
    id: 1,
    name: 'A',
    price: 100,
    qty: 34

},
{
    id: 2,
    name: 'A1',
    price: 1002,
    qty: 342

}]


broker.createService({
    name: 'products',
    actions: {
        //GET ALL products
        list: {
            rest: "GET /",
            handler(ctx) {
                return PRODUCTS;
            }
        },
        //GET product by id
        get: {
            rest: "GET /:id",
            handler(ctx) {
                console.log(ctx.params)
                return PRODUCTS.filter(product => product.id == ctx.params.id)
            }
        },
        //save
        create: {
            rest: "POST /",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product Created'
            }
        },
        //update
        update: {
            rest: "PUT /:id",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product update'
            }
        },
        //delete
        remove: {
            rest: "DELETE /:id",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product update'
            }
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
