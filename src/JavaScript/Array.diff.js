function arrayDiff(a, b) {
    for (let i = 0; i<b.length; i++)
        a = a.filter(e => e !== b[i])
    return a
}