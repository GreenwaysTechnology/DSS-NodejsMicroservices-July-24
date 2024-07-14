import { createReadStream } from 'node:fs'

const filePath = './src/assets/info.txt'

const options = {
    encoding: 'UTF-8'
}

const inputStream = createReadStream(filePath, options)

//attach events : listeners
//attach events for io 
let data = ''
inputStream.on('data', chunk => {
    console.log('data event is called')
    data += chunk
})

inputStream.on('end', () => {
    console.log('end event is called')
    console.log(data)
})
inputStream.on('close', () => {
    console.log('close event is called')
})
inputStream.on('error', (err) => {
    console.log('error event', err)
})

