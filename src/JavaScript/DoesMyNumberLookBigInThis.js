const narcissistic = (value) =>
    value === value.toString().split('').map(v => v ** value.toString().length).reduce((a, b) => a + b)

console.log(narcissistic(153))