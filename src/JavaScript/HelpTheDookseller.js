function stockList(listOfArt, listOfCat) {
    let result =[]
    for (let i = 0; i<listOfCat.length; i++){
        let sum = 0
        for (let j = 0; j<listOfArt.length; j++){
            if (listOfCat[i]===listOfArt[j][0]) {
                sum += +listOfArt[j].match(/\d+/g)
            }
        }
        result.push(`(${listOfCat[i]} : ${sum})`)
    }
    return result.map(cat => cat).join(' - ')
}

console.log(stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]))