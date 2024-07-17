const calculateCircleArea = (radius) => {
	return Math.PI * radius * radius
}

const squareNumber = (numbers) => {
	return numbers.map(number => number * number)
}

const radius = 7
const area = calculateCircleArea(radius)
console.log(area)

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = squareNumber(numbers)
console.log(squaredNumbers)