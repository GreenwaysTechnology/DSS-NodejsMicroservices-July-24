
function sayHello(message = 'welcome to') {
    return `${message} Subramanian`
}
console.log(sayHello('hello'))

function multiply(a = 0, b = 0) {
    return a * b
}
console.log(multiply(10,10))