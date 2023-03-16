console.log(arguments)
console.log(require('module').wrapper)

// module.exports
const Calculator1 = require('./test-module-1')

console.log(Calculator1.add(1, 2))

// exports
const Calculator2 = require('./test-module-2')

console.log(Calculator2.multiply(6, 2))

const { add, multiply, divide } = Calculator2

console.log(multiply(6, 2))
console.log(add(6, 2))

// caching

require('./test-module-3')()
require('./test-module-3')()
require('./test-module-3')()