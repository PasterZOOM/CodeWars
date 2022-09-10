const XO = (str) => str.replace(/o/ig, '').length === str.replace(/x/ig, '').length;

console.log(XO('xxOo'));