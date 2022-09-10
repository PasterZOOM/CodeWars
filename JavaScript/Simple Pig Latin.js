function pigIt(str) {
    return str.split(' ').map(e => e==='!' ? e : e==='?' ? e : [...e, e[0], 'ay'].splice(1, 9999999999).join('')).join(' ')
}

console.log(pigIt("Pig latin is cool ?"))