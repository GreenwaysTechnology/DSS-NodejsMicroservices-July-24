
//simple

function blockMe(message) {
    console.log(message)
}
function sayHello() {
    //by default async
    return Promise.resolve('hello')
}
function main() {
    blockMe('start')
    sayHello().then(res => console.log(res))
    blockMe('end')
}
main()