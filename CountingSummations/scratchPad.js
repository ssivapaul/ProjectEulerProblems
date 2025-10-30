
let countingSummations = (n) => {
    let cA = new Array(n + 1).fill(0)
    cA[0] = 1
    for(let s = 1; s < n + 1; s++) {
        for(let i = s; i < n + 1; i++) {
            cA[i] += cA[i - s]
            //console.log(cA)
        }
    }
    return (cA[n] - 1)
}

console.time("Counting")
console.log(countingSummations(5))
console.log(countingSummations(20))
console.log(countingSummations(50))
console.log(countingSummations(100))
console.timeEnd("Counting")
