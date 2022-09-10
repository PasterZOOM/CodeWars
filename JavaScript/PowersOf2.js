function powersOfTwo(n){
    let arr =[]
    for (let i = 0; i <= n; i++) {
        arr.push(2**i)
    }
    return arr
}

console.log(powersOfTwo(0))
console.log(powersOfTwo(2))
console.log(powersOfTwo(5))