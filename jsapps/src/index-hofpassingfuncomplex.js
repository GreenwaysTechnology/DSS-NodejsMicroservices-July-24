
function login(userName, password, resolve, reject) {
    if (userName === 'admin' && password === 'admin') {
        resolve('login success')
    } else {
        reject('login failed')
    }
}

login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})

login('bar', 'foo', function (status) {
    console.log('login success')
}, function (err) {
    console.log('login failed')
})