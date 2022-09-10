const squareDigits =(num) => +String(num).split('').map(n => n*n).join('');

console.log(squareDigits)