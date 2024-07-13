
//simple

function blockMe(message) {
    console.log(message)
}
function getError() {
    //by default async
    return Promise.reject('oops')
}
function main() {
    blockMe('start')
    getError().catch(err => console.log(err))
    blockMe('end')
}
main()