

let gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
}

let numerator = 1
let denominator = 1
for(let nu = 10; nu < 99; nu++) {
    for(let de = nu+1; de < 100; de++) {
        let n0 = nu%10
        let n1 = Math.floor(nu/10)
        let d0 = de%10
        let d1 = Math.floor(de/10)
        if(n0 === d1 && d0*nu === n1*de || n1 === d0 && d1*nu === n0*de) {
            numerator *= nu
            denominator *= de
        }
    }
}

console.log(denominator/gcd(numerator, denominator))