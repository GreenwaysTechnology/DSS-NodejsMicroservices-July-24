

const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = { name: 'admin' }
    //user=null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User not found')
    }

}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
const showdashboard = (status, resolve, reject) => {
    console.log('showdashboard is called')
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'welcome')
    } else {
        setTimeout(reject, 1000, 'oops!Try again')
    }
}
function main() {
    getUser((user) => {
        login(user, (status) => {
            showdashboard(status, (msg) => {
                console.log(msg)
            }, (err) => {
                console.log(err)
            })
        }, (err) => {
            console.log(err)
        })
    }, (err) => {
        console.log(err)
    })
}
main()