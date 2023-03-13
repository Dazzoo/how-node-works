const EventEmitter = require('events')
const http = require('http')


class Sales extends EventEmitter {
    constructor() {
        super()
        this.salesCount = 0 
    }
}

const SalesEmitter = new Sales()



SalesEmitter.on('newSale', () => {
    console.log(`-------------------\nThere was a new sale № ${SalesEmitter.salesCount}`)
    SalesEmitter.salesCount += 1
})


SalesEmitter.on('newSale', (name, product) => {
    console.log(`Buyer name is ${name}`)
})

SalesEmitter.on('newSale', (name, product) => {
    console.log(`Product name is ${product}`)
})

setInterval(() => {
    SalesEmitter.emit('newSale', 'John', 'Silk mask')
}, 5000) 

///////////////////////////////

const server = http.createServer()

server.listen(8000, '127.0.0.1', () => {
    console.log('_Server started_')
})

server.on("close", (req, res) => {
    console.log('_Server closed_')
})

server.on("request", (req, res) => {
    console.log('--New request')
    console.log(req.url)
    res.end('Response content')

})