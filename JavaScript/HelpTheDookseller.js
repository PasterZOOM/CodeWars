function stockList(listOfArt, listOfCat) {
    let arr =[]
    for (let i = 0; i<listOfCat.length; i++){
        let sum = 0
        for (let j = 0; j<listOfArt.length; j++){
            if (listOfCat[i]===listOfArt[j][0]) {
                sum += +listOfArt[j].match(/\d+/g)
            }
        }
        arr.push(`(${listOfCat[i]} : ${sum})`)
    }
    if (!arr[0]) return ''
    let result = arr.join(' - ')
    if (result.match(/\d+/g).reduce((a,b)=>+a+(+b))) return result
    else return ''
}

console.log(stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]))
console.log(stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "E", "F", "W"]))