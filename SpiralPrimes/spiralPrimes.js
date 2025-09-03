function spiralPrimes(percent) {
  // Helper function
    let isPrime = (n) => {
    if(n == 2) return true
    if(n <= 1 || n%2 == 0) return false
    for(let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) if(n%i == 0) return false
    return true
}
    //Main routine
    let pCount = 0 // To count number of primes on diagonals
    let dCount = 0 // To count total numbers on diagonals
    let p = 1 // numbers on Right bottom diagonal
    let diag = 0 // Keep track of numbers on the diagonals
    let width = 3 // Keep track of width of square
    let per = 0 // Keep track of percentage
    for(let i = 2; true; i += 2) {
        for(let j = 1; j <= 4; j++) {
            diag  = p + i*j
            if(isPrime(diag)) pCount++
            dCount++
        }
        p = diag
        per = Math.floor((pCount/(dCount+1))*100)
        if (per < percent) return width
        width += 2
    }
    return 0
}

spiralPrimes(50);