const getMiddle = (s) =>
    s.length % 2 === 0 ? s.slice(s.length / 2 - 1, s.length / 2 + 1) : s.slice((s.length) / 2, (s.length + 1) / 2)

console.log(getMiddle('test'))
console.log(getMiddle('testing'))


const getMiddle1 = (s) => s.slice((s.length - 1) / 2, s.length / 2 + 1);

console.log(getMiddle1('test'))
console.log(getMiddle1('testing'))
