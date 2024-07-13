
//passing function as parameter

let login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        resolve('login success')
    } else {
        reject('login failed')
    }
}
// login('admin', 'admin', (status) => {
//     console.log(status)
// }, (err) => {
//     console.log(err)
// })
login('admin', 'admin', status => console.log(status), err => console.log(err))