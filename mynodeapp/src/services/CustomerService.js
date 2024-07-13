

class CustomerService {
    constructor() {

    }
    //sync api
    // findAll() {
    //     return [{ id: 1, name: 'a' }]
    // }
    //callback based
    // findAll(callback) {
    //     setTimeout(callback, 1000, [{ id: 1, name: 'a' }])
    // }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, [{ id: 1, name: 'a' }])
        })
    }
}
//share class
//module.exports = CustomerService
//share object
module.exports = new CustomerService()