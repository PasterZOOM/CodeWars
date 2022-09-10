function gps(s, x) {
    let a = []
    for (let i = 0; i < x.length; i++) {
        i !== 0 && a.push(Math.floor((3600 * (x[i] - x[i - 1])) / s))
    }
    let u = Math.max.apply(null, a)
    return u > 1 ? u : 0
}

var x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61];
var s = 20;
console.log(gps(s, x))