// Primitives
var myNumber = 10
let myString = 'Hello World!'
const myBoolean = true
const myNull = null
var myUndefined
const mySymbol = Symbol('unique')
const myBigInt = 1234567890123456789012345678901234567890n

// Non Primitives
const myArray = [1, 2, 3, 4, 5]
const myObject = {
  name: 'John',
  age: 30
}
let myFunction = function () {
  console.log('Hello from myFunction')
}

// Arithmetic operations
const sum = myNumber + 6
const difference = myNumber - 3
const product = myNumber * 2
const quotient = myNumber / 5
const remainder = myNumber % 2

console.log('Aritehmetic operations')
console.log(`Sum: ${sum}`)
console.log(`Difference: ${difference}`)
console.log(`Product: ${product}`)
console.log(`Quotient: ${quotient}`)
console.log(`Remainder: ${remainder}`)

// Comparison operators
let isEqual = myNumber == 10
let isStrictlyEqual = myNumber === '10'
let isNotEqual = myNumber != 5
let isStrictNotEqual = myNumber !== "10";
let isGreter = myNumber > 5
let isLesser = myNumber < 15
let isGreterOrEqual = myNumber >= 10
let isLessOrEqual = myNumber <= 20

console.log('\nComparison operators')
console.log(`is Equal: ${isEqual}`)
console.log(`is Strictly Equal: ${isStrictlyEqual}`)
console.log(`is Not Equal: ${isNotEqual}`)
console.log(`is Strict Not Equal: ${isStrictNotEqual}`)
console.log(`is Greter: ${isGreter}`)
console.log(`is Lesser: ${isLesser}`)
console.log(`is Greter Or Equal: ${isGreterOrEqual}`)
console.log(`is Lesser Or Equal: ${isLessOrEqual}`)

// Output primitives
console.log('\nPrimitives Data Types:')
console.log(`Number: ${myNumber}`)
console.log(`String: ${myString}`)
console.log(`Boolean: ${myBoolean}`)
console.log(`Null: ${myNull}`)
console.log(`Undefined: ${myUndefined}`)
console.log(`Symbol: ${mySymbol.toString()}`)
console.log(`Bigint: ${myBigInt}`)

// Output non-primitives
console.log('\nNon Primitives Data Types:')
console.log(`Array: ${myArray}`)
console.log(`Object: ${JSON.stringify(myObject)}`)
console.log(`Function:`)
myFunction()