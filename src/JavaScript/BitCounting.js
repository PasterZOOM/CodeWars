const countBits = (n) => n.toString(2).split('').filter(i=>i==='1').length

console.log(countBits(23231))
console.log(countBits(9))