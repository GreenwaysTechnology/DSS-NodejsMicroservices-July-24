//
//a =x, b=y
function add(a, b) {
    return a + b;
}
let x = 10;
let y = 20;
console.log(add(x, y))
console.log(add(10, 10))

//higher order fun
//greet = hello =  function(){}
function sayGreet(greet) {
    greet()
}
let hello = function () {
    console.log('hello')
}
sayGreet(hello)

//passing hardcoded function
sayGreet(function () {
    console.log('welcome')
})

