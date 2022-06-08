function formatDuration(seconds) {

    let y = Math.floor(seconds / 31536000)
    let d = Math.floor((seconds - y * 31536000) / 86400)
    let h = Math.floor((seconds - y * 31536000 - d * 86400) / 3600)
    let m = Math.floor((seconds - y * 31536000 - d * 86400 - h * 3600) / 60)
    let s = Math.floor(seconds - y * 31536000 - d * 86400 - h * 3600 - m * 60)

    let year = y > 1 ? ' years' : ' year'
    let day = d > 1 ? ' days' : ' day'
    let hour = h > 1 ? ' hours' : ' hour'
    let min = m > 1 ? ' minutes' : ' minute'
    let sec = s > 1 ? ' seconds' : ' second'

    let arr = [y, d, h, m, s]
    if ((d > 0 && h > 0) || (d > 0 && m > 0) || (d > 0 && s > 0) || (h > 0 && m > 0) || (h > 0 && s > 0) || (m > 0 && s > 0)) {
        year += ', '
    }
    if ((h > 0 && m > 0) || (h > 0 && s > 0) || (m > 0 && s > 0)) {
        day += ', '
    }
    if (m > 0 && s > 0) {
        hour += ', '
    }
    if ((d > 0 && h === 0 && m === 0 && s === 0) || (d === 0 && h > 0 && m === 0 && s === 0) || (d === 0 && h === 0 && m > 0 && s === 0) || (d === 0 && h === 0 && m === 0 && s > 0)) {
        year += ' and '
    }
    if ((h > 0 && m === 0 && s === 0) || (h === 0 && m > 0 && s === 0) || (h === 0 && m === 0 && s > 0)) {
        day += ' and '
    }
    if ((m > 0 && s === 0) || (m === 0 && s > 0)) {
        hour += ' and '
    }
    if (s > 0) {
        min += ' and '
    }

    return !seconds ? 'now' : (y > 0 ? (y + year) : '') + (d > 0 ? (d + day) : '') + (h > 0 ? (h + hour) : '') + (m > 0 ? (m + min) : '') + (s > 0 ? (s + sec) : '')
}

console.log(formatDuration(31536001))

