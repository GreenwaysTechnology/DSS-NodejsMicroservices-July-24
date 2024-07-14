
import { readFile } from 'node:fs/promises'

async function main() {
    const filePath = './src/assets/info.txt'
    const options = {
        encoding: 'UTF-8'
    }
    // readFile(filePath, options)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    try {
        const data = await readFile(filePath, options)
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }


}
main()