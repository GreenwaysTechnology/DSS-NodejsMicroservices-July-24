//blocking : functions are getting called in sequence

function blockMe(message) {
    console.log(message)
}
function sayHello(callback) {
    // callback()
    //introduce non block api - timer
    setTimeout(callback, 5000)
}
function main() {
    blockMe('start')
    sayHello(function () {
        console.log('hello')
    })
    blockMe('end')
}
main()