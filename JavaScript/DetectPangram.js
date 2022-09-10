const isPangram = (string) =>
    Array.from(new Set(string
        .toLowerCase()
        .match(/[a-z]/g))).length === 26


console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'))