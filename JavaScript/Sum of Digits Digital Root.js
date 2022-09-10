const digital_root = (n) => {
    let arr = String(n).split('')
    let a = 0
    for (let i = 0; i < arr.length; i++) {
        a += Number(arr[i])
    }
    if (String(a).length === 1) return a
    return digital_root(a)
}
console.log(digital_root(6163))

function digital_root2(n) {
    return--n%9+1;
}
console.log(digital_root2(6163))