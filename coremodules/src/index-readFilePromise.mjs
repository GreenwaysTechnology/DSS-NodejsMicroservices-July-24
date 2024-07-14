
import { readFile } from 'node:fs'

function blockMe(message) {
    console.log(message)
}
function getFileData(filePath, options) {
    return new Promise((resolve, reject) => {
        readFile(filePath, options, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}
function main() {
    const filePath = './src/assets/info.txt'

    const options = {
        encoding: 'UTF-8'
    }

    blockMe('start')
    getFileData(filePath, options)
        .then(data => console.log(data))
        .catch(err => console.log(err))
        
    blockMe('end')

}
main()