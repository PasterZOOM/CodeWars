const wave = (str) => str
    .split('')
    .map((l, i) =>
        str.split('')
            .map((le, index) => index === i
                ? le.toUpperCase()
                : le)
            .join('')).filter(w => w.match(/[A-Z]/) !== null)

console.log(wave('hello sdfsf'))