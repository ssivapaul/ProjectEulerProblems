
let A = [1, 2]
let jStr = JSON.stringify(A);
let jObj = JSON.parse(jStr);

let cntFactor = (n) => {
    let count = 0, i = 2
    while(i < n) {
        while(n % i == 0) {
            n /= i, count++
        }
        i++
    }
    if(n !== 1 && count > 0) count++
    return count
}

let isPrime = (n) => {
    if(n == 2 || n == 1) return true
    if(n % 2 == 0) return false
    let sqN = Math.floor(Math.sqrt(n))
    for(let i = 3; i<= sqN; i++) {
        if(n % i == 0) {
            return false
        }
    }
    return true
}

let gcd = (a, b) => {
    while(b !== 0) { let t = b; b = a % b;  a = t }
    return a
}
let totientS = (limit) => {
    let phi = [...new Array(limit + 1)].map((_, i) => i );
    for (let p = 2; p <= limit; p++) {
        if(phi[p] == p) { // ensures p is prime
            for (let k = p; k <= limit; k += p) phi[k] -= phi[k] / p; 
        }
    }
    return phi;
}

console.log(totientS(10))
