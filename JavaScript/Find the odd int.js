function findOdd(A) {
    for (let i = 0; i < A.length; i++){
        let b = A.filter(e=>e===A[i])
        if (b.length%2 !== 0) return A[i];
    }
}
