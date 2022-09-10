const fakeBin =(x) => x.replace(/[0-4]/g, 0).replace(/[5-9]/g, 1)

console.log(fakeBin('45385593107843568'));