function disemvowel(str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u" ||
            arr[i] == "A" || arr[i] == "E" || arr[i] == "I" || arr[i] == "O" || arr[i] == "U"){
            delete arr[i];
            i = 0;}};
    str = arr.join('');
    return str;
}