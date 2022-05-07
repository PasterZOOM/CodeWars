function humanReadable(s) {

    let h2 = Math.floor(s / 3600)
    let m2 = Math.floor((s - h2 * 3600) / 60)
    let s2 = s - Math.floor(s / 60) * 60

    if (h2 < 10) {
        if (m2 < 10) {
            if (s2 < 10)
                return `0${h2}:0${m2}:0${s2}`
            else return `0${h2}:0${m2}:${s2}`
        } else {
            if (s2 < 10)
                return `0${h2}:${m2}:0${s2}`
            else return `0${h2}:${m2}:${s2}`
        }
    } else {
        if (m2 < 10) {
            if (s2 < 10)
                return `${h2}:0${m2}:0${s2}`
            else return `${h2}:0${m2}:${s2}`
        } else {
            if (s2 < 10)
                return `${h2}:${m2}:0${s2}`
            else return `${h2}:${m2}:${s2}`
        }
    }
}

let s = 71
console.log(humanReadable(s))