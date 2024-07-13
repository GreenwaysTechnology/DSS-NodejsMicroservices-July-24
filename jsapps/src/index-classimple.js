//es 6 class

class Customer {
    //instance variable
    id = 1
    name = 'Subrmanian'
    createInvoice() {
        return 'Invoice is created'
    }
}

//customer is variable

let customer = new Customer();
console.log(customer.id,customer.name,customer.createInvoice())