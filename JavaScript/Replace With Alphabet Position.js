function alphabetPosition(text) {

    let arr = text.toLowerCase().split('')
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 'a' ? arr[i] = '1' :
            arr[i] === 'b' ? arr[i] = '2' :
                arr[i] === 'c' ? arr[i] = '3' :
                    arr[i] === 'd' ? arr[i] = '4' :
                        arr[i] === 'e' ? arr[i] = '5' :
                            arr[i] === 'f' ? arr[i] = '6' :
                                arr[i] === 'g' ? arr[i] = '7' :
                                    arr[i] ==='h' ? arr[i] = '8' :
                                        arr[i] === 'i' ? arr[i] = '9' :
                                            arr[i] === 'j' ? arr[i] = '10' :
                                                arr[i] === 'k' ? arr[i] = '11' :
                                                    arr[i] === 'l' ? arr[i] = '12' :
                                                        arr[i] === 'm' ? arr[i] = '13' :
                                                            arr[i] === 'n' ? arr[i] = '14' :
                                                                arr[i] === 'o' ? arr[i] = '15' :
                                                                    arr[i] === 'p' ? arr[i] = '16' :
                                                                        arr[i] === 'q' ? arr[i] = '17' :
                                                                            arr[i] === 'r' ? arr[i] = '18' :
                                                                                arr[i] === 's' ? arr[i] = '19' :
                                                                                    arr[i] === 't' ? arr[i] = '20' :
                                                                                        arr[i] === 'u' ? arr[i] = '21' :
                                                                                            arr[i] === 'v' ? arr[i] = '22' :
                                                                                                arr[i] === 'w' ? arr[i] = '23' :
                                                                                                    arr[i] === 'x' ? arr[i] = '24' :
                                                                                                        arr[i] === 'y' ? arr[i] = '25' :
                                                                                                            arr[i] === 'z' ? arr[i] = '26' : arr.splice(i, 1) && i--}
    return arr.join(' ')
}

console.log(alphabetPosition('zk9y1)@c'))