const customerService = require('./services/CustomerService')

async function main() {
    //     customerService.findAll(customers => {
    //         console.log(customers)
    //     })

    //promise then 
    //customerService.findAll().then(customers => console.log(customers)).catch(err => console.log(err))
    try {
        const customers = await customerService.findAll()
        console.log(customers)
    }
    catch (err) {
        console.log(err)
    }
}
main()