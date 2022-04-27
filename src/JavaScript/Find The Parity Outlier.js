function findOutlier(integers){
    //your code here
    let newAtt = integers.filter(el => el%2 !== 0)
    if (newAtt.length === 1){return  newAtt[0]}
    let newAtt2 = integers.filter(el=> el%2 == 0)
    return newAtt2[0]
}