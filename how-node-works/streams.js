const fs = require('fs')
const server = require('http').createServer()

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...')
})

///// Solution 1

server.on('request', (req, res) => {

    ///// Solution 1

    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) { 
    //         console.log(err)
    //         res.end('Error')
    //      } else {
    //         res.end(data)
    //      }
    // })

    ///// Solution 2

    // const redable =  fs.createReadStream('test-file.txt')

    // redable.on('data', (chunk) => {
    //     res.write(chunk)
    // })

    // redable.on('end', () => {
    //     res.end()
    // })

    // redable.on('error', (err) => {
    //     console.log(err)
    //     res.statusCode = 500
    //     res.end('File not found')
    // })

    ///// Solution 3

    const redable =  fs.createReadStream('test-file.txt')
    redable.pipe(res)


})