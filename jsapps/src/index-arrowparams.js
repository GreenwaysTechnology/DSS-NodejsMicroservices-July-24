
//code refactoring

//if function body has only one line of code, we can remove {}
// let hai = () => {
//     console.log('hai')
// }
let hai = () => console.log('hai')
hai()

//parameters
let add = (a = 0, b = 0) => {
    let c = a + b
    console.log(c)
}
add(10, 10)
//return 
// let multiple = (a = 0, b = 0) => {
//     return a * b 
// }
// console.log(multiple(10,10))

//function having only return, then we can remove {} and return statement
let multiple = (a = 0, b = 0) => a * b
console.log(multiple(10, 10))


//if function takes single arg, no default value,return the same; we can remove {},return

let getStock = value => value

console.log(getStock(34))