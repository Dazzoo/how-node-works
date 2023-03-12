const EventEmitter = require('events')


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