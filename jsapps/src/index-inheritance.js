class Account {
    constructor() {
        console.log('Account constructor')
    }
    deposit() {
        return 100
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('SavingsAccount constructor')
    }
    //method redefining:(overriding)
    deposit(){
        return 1000 + super.deposit()
    }
   
}
let sb = new SavingsAccount()
console.log(sb.deposit())