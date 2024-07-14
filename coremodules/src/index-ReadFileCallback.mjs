//const fs =require('node:fs')

import { readFile } from 'node:fs'

function blockMe(message) {
    console.log(message)
}
function main() {
    const filePath = './src/assets/info.txt'

    const options = {
        encoding: 'UTF-8'
    }

    blockMe('start')
    readFile(filePath, options, (err, data) => {
        if (err) throw err
        console.log(data)
    })
    blockMe('end')

}
main()