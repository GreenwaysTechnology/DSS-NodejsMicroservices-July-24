//es 6 class

class Customer {
    //instance variable
    id
    name
    constructor(id = 1, name = 'name') {
        this.id = id
        this.name = name
    }
    createInvoice() {
        return 'Invoice is created'
    }
}

//customer is variable

let customer = new Customer();
console.log(customer.id, customer.name, customer.createInvoice())

customer = new Customer(2,'Subramanian');
console.log(customer.id, customer.name, customer.createInvoice())