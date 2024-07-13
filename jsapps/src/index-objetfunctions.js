
function Customer() {
    //instance variables
    this.id = 1
    this.name = 'Subramanian'
    //instance methods
    this.createInvoice = function () {
        return 'invoice is created'
    }
}
//create object
//customer is just reference variable
//new is operator
//Customer() is constructor call
let customer = new Customer();
console.log(customer.id,customer.name,customer.createInvoice())