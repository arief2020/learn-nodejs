const prompt = require('prompt-sync')()

const inputNumber = parseInt(prompt('Program Odd or Even. Input your number: '), 10)

if (isNaN(inputNumber)) {
  console.log('Input bukan angka yang valid.')
} else {
  if (inputNumber % 2 === 0) {
    console.log(`${inputNumber} adalah angka genap.`)
  } else {
    console.log(`${inputNumber} adalah angka ganjil.`)
  }
}

const dayNumber = parseInt(prompt('Program Day. Input number (1-7): '), 10)

switch (dayNumber) {
  case 1:
    console.log('Today is Monday.')
    break
  case 2:
    console.log('Today is Tuesday.')
    break
  case 3:
    console.log('Today is Wednesday.')
    break
  case 4:
    console.log('Today is Thursday.')
    break
  case 5:
    console.log('Today is Friday.')
    break
  case 6:
    console.log('Today is Saturday.')
    break
  case 7:
    console.log('Today is Sunday.')
    break
  default:
    console.log('Invalid day number. Please enter a number between 1 and 7.')
}