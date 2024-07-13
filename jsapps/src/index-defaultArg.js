
//message is arg
function sayHello(message = 'default') {
    console.log(message)
}

//parameter
sayHello('hello')
//parameter is here undefined
sayHello()
//default arg
function multiply(a = 0, b = 0) {
    let c = a * b
    console.log(c)
}
multiply(10, 10)
multiply()