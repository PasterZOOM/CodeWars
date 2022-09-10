function merge(line) {
    let a = 0
    for (let i = 0; i < line.length; i++) {
        if (line[i] === 0) {
            line.splice(i, 1)
            a++
            i--
        }
    }
    for (let i = 0; i < line.length; i = i + 1) {
        if (line[i] === line[i + 1]) {
            line[i] = line[i] * 2
            line.splice(i + 1, 1)
            a++
        }
    }
    for (let i = 0; i < a; i++) {
        line.push(0)
    }
    return line
}

console.log(merge([2, 0, 2, 2]))
console.log(merge([2, 0, 2, 4]))
console.log(merge([0, 0, 2, 2]))
console.log(merge([0, 0, 0, 2]))
console.log(merge([32, 32, 4, 0, 0, 4, 8, 32, 4, 16, 8]))