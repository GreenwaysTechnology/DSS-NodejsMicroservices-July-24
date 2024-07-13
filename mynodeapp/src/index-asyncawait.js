const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = { name: 'admin' }
        //user=null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User not found')
        }
    })
}

const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}
const showdashboard = status => {
    console.log('showdashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'welcome')
        } else {
            setTimeout(reject, 1000, 'oops!Try again')
        }
    })
}
async function main() {
    // getUser()
    //     .then(user => login(user))
    //     .then(status => showdashboard(status)).then(page => console.log(page))
    //     .catch(err => console.log(err))

    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showdashboard(status)

        console.log(user,status,page)
    }
    catch (err) {
        console.log(err)

    }
}
main()