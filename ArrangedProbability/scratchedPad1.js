
let arrangedProbability = (limit) => {
    // b(b - 1)/n(n - 1) = 1/2
    // (4n - 2)**2 - 2(4b - 2)**2 = -4 
    // x = 4n - 2, y = 4b - 2
    // Xn+1 = 3Xn + 4Yn, Recursive solutions of X
    // Yn+1 = 2Xn + 3Yn, Recursive solutions of Y
    // n = (x + 2)/4, b = (y + 2)/4

    let x = 2, y = 2 // fundamental solution 
    while(true) {
        let tx = 3*x + 4*y
        let ty = 2*x + 3*y
        x = tx, y = ty
        let n = (x + 2)/4
        let b = (y + 2)/4
        if(n > limit) return b
    }
}
console.time("Arranged")
console.log(arrangedProbability(20))
console.log(arrangedProbability(100))
console.log(arrangedProbability(100000))
console.log(arrangedProbability(1000000000))
console.log(arrangedProbability(1000000000000))
console.timeEnd("Arranged")
