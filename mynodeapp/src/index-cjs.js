const info = require('./mylibs/lib')
const CustomerService = require('./services/CustomerService')

console.log(info)

let customerService = new CustomerService()
console.log(CustomerService)
console.log(customerService.findAll())