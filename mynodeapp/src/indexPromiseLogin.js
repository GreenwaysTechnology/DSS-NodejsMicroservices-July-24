function blockMe(message) {
    console.log(message)
}
function login(name) {
    if (name === 'admin') {
        return Promise.resolve('Login success')
    } else {
        return Promise.reject('Login Failed')
    }
}

blockMe('start')

login('admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))

login('foo')
    .then(status => console.log(status))
    .catch(err => console.log(err))
    
blockMe('end')