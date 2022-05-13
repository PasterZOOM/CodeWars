function humanReadable(second) {

    let h = '0' + Math.floor(second / 3600)
    let m = '0' + Math.floor((second - h * 3600) / 60)
    let s = '0' + (second - Math.floor(second / 60) * 60)
    return `${h.slice(-2)}:${m.slice(-2)}:${s.slice(-2)}`
}

let s = 1000
console.log(humanReadable(s))