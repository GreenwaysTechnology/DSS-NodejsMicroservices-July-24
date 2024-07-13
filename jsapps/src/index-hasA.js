
class Repository {
    constructor() {

    }
    save() {
        return "saved"
    }
}

class Controller {
    //Controller has a Repository
    repository
    constructor(repository) {
        this.repository = repository
    }
    save() {
        return this.repository.save()
    }
}
let ctrl = new Controller(new Repository())

let customer = {
    id: 1,
    name: 'a',
    //customer has a address
    address: {
        city: 'Coimbatore'
    }
}