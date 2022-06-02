function descendingOrder(n){
    return +String(n).split('').sort().reverse().join('')
}

console.log(descendingOrder(2234))