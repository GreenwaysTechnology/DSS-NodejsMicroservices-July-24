function blockMe(message) {
    console.log(message)
}
function login(name) {
    return new Promise((resolve, reject) => {
        if (name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}

blockMe('start')

login('admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))

login('foo')
    .then(status => console.log(status))
    .catch(err => console.log(err))

blockMe('end')