function gridMap(fn,a) {
    return a.map(e=>e.map(e=>fn(e)));
}