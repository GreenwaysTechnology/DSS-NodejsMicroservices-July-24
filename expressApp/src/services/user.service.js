const USERS = require("../mock-data/users")

class UserService {

    //apis 
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, USERS)
        })
    }

}

module.exports = new UserService()