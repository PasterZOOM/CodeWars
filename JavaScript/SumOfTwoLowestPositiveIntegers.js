const sumTwoSmallestNumbers = numbers =>
    numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b)

console.log(sumTwoSmallestNumbers([1, 5, 8, 12, 19, 22]))