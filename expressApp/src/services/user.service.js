const USERS = require("../mock-data/users")

class UserService {

    //apis 
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, USERS)
        })
    }

   async findById(id) {
        return USERS.find(user => user.id === id)
    }
    async save(user) {
        // Todo: save operation
        return user
    }

}

module.exports = new UserService()