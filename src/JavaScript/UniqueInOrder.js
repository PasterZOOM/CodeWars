var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    !Array.isArray(iterable) ? iterable = iterable.split(''): iterable

    let resultArr = []
    for (let i = 0; i < iterable.length; i++) {
        resultArr.push(iterable[i])
        for (let j = i + 1; j < iterable.length; j++) {
            if (iterable[i] === iterable[j]) {
                iterable.splice(j, 1)
                j--
            }
            else {break}
        }
    }
    return resultArr
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
