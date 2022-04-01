function moveZeros(arr) {
    let del = 0;
    for (let i = 0; i < arr.length; i++){
     if (arr[i] === 0){
     arr.splice(i, 1);
     del++;
     i = 0;}
   }
    for (let i = 0; i < del; i++)
    arr.push(0);
    return arr
  }