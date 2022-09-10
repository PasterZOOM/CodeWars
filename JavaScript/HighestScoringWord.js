const high = (x) => x.split(' ').sort((a, b) =>
    [...a].reduce((acc, i) => acc + i.charCodeAt(0) - 96, 0) === [...b].reduce((acc, i) => acc + i.charCodeAt(0) - 96, 0) ? 0 :
        [...a].reduce((acc, i) => acc + i.charCodeAt(0) - 96, 0) < [...b].reduce((acc, i) => acc + i.charCodeAt(0) - 96, 0) ? 1 : -1)[0];

console.log(high('man i need a taxi up to ubud'));
console.log(high('aa b'));
console.log(high('b aa'));