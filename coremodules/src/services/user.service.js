const USERS = require("../mock-data/users")

class UserService {

    //apis 
    findAll() {
        const userJson = JSON.stringify(USERS)
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, userJson)
        })
    }
    save(user) {
        console.log(user)
        return Promise.resolve('saved')
    }

}

module.exports = new UserService()