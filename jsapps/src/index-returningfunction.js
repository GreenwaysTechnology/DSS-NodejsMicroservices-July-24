
// function makeCoffee() {
//     function start() {
//         console.log('starting')
//     }
//     return start

// }
// function makeCoffee() {
//     return function start() {
//         console.log('starting')
//     }
//     //return start

// }
// function makeCoffee() {
//     return function () {
//         console.log('starting')
//     }
//     //return start

// }
// // let myfun = makeCoffee()
// // myfun()
// makeCoffee()()

function makeCoffee() {
    return function (status) {
        console.log(status)
    }
    //return start

}
// let myfun = makeCoffee()
// myfun()
makeCoffee()('starting')