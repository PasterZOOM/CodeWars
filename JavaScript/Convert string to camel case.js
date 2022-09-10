function toCamelCase(str){
    let arr = str.split('_')
    if (arr.length > 1) {
        for (let i = 1; i<arr.length;i++){
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
    } else {
        arr = str.split('-')
        for (let i = 1; i<arr.length;i++){
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        } }
    return arr.join('')
}

console.log(toCamelCase('the_stealth_warrior'))
console.log(toCamelCase('The-Stealth-Warrior'))

const toCamelCase2 = (str) =>
    str.split(/-|_/g).map((el, i) => (i > 0 ? el[0].toUpperCase() : el[0]) + el.slice(1)).join('')

console.log(toCamelCase2('the_stealth_warrior'))
console.log(toCamelCase2('The-Stealth-Warrior'))