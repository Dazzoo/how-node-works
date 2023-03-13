const fs = require('fs')
const crypto = require('crypto')

const start = Date.now()
process.env.UV_THREADPOOL_SIZE = 2 

setTimeout(() => { console.log('Timeout 1 is finished') }, 0)
setImmediate(() => { console.log('Immediate 1 is finished') })

fs.readFile('test-file.txt', () => {
    console.log('I/O is finished')
    console.log('--------------')

    setTimeout(() => { console.log('Timeout 2 is finished') }, 0)
    setTimeout(() => { console.log('Timeout 3000 is finished') }, 3000)
    setImmediate(() => { console.log('Immediate 2 is finished') })

    process.nextTick(() => console.log('Process next tick'))

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password enctypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password enctypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password enctypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password enctypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password enctypted')
    })
})

console.log('Hello from top level code')