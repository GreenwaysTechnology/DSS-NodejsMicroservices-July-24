

const greeterMiddleware = function (param) {
    //hof
    return function (req, res, next) {
        console.log(param)
        next()
    }
}
module.exports = greeterMiddleware;