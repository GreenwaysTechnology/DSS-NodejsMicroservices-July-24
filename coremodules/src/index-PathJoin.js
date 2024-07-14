const { readFile } = require('node:fs')
const { join } = require('node:path')

// const filePath = './src//assets/info.txt'
const filePath = join(__dirname, 'assets/info.txt')

const options = {
    encoding: 'UTF-8'
}
function blockMe(message) {
    console.log(message)
}
//async api to read file
blockMe('start')
readFile(filePath, options, (err, data) => {
    if (err) throw err
    console.log(data)
})
blockMe('end')