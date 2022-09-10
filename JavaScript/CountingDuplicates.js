function duplicateCount(text) {
    const countItems = [...text.toLowerCase()].reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1
        return acc
    }, {})
    return Object.keys(countItems).filter((item) => countItems[item] > 1).length
}

console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('aA11'))
console.log(duplicateCount('Indivisibility'))