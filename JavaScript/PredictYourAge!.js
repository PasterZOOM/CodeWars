const predictAge = (...args) => Math.floor([...args].reduce((acc, i) => acc + i ** 2, 0) ** 0.5 / 2)

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))