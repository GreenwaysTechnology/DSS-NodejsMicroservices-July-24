function sayGreet(greet) {
    let status = greet('welcome')
    console.log(status)
}
let hello = function (message) {
    console.log(message)
    return 'processed'
}
sayGreet(hello)

//passing hardcoded function
sayGreet(function (message) {
    console.log(message)
    return "processed"
})
