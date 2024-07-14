const EventEmitter = require('node:events')

class Sales extends EventEmitter {
    constructor() {
        super()
        //register listener
        this.on('sold', (evt) => {
            console.log('Got Event')
            console.log(evt)
        })
    }

    sale(product) {
        //emitter
        this.emit('sold', product)
    }
}

function main() {
    let sales = new Sales()
    sales.sale({ id: 1, name: 'product', qty: 100, price: 100 })
}
main()