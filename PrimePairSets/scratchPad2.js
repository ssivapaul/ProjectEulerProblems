


let isPrime = (n) => {
    if(n == 2) return true
    if (n <= 1) return false; // 0 and 1 are not prime
    if (n%2 == 0) return false
    for (let i = 3; i <= Math.sqrt(n); i += 2) if (n % i === 0) return false
    return true
}
let getPrime = (num) => {
    let p = [3, 5]
    for(let i = 1; i <= num; i++) {
        isPrime(i) ? p.push(i) : 0
    }
    return p
}
let getNextPrime = (curPrime) => {
    while(++curPrime) {
        if(isPrime(curPrime)) return curPrime
    }
}

console.time("Prime")
let p = {}
let P = getPrime(10000)
for(let i = 0; i < P.length; i++) {
    for(let j = 0; j < P.length; j++) {
        let fP = Number(String(P[i]) + String(P[j]))
        let rP = Number(String(P[j]) + String(P[i]))
        if(isPrime(fP) && isPrime(rP)) {
            (p[P[i]] == undefined) ? p[P[i]] = [P[j]] : !p[P[i]].includes(P[j]) ? p[P[i]].push(P[j]) : 0
        }
    }
}
//console.log(p)
let cliq = []
let gCliq = []
let candCliq = []
let K = Object.keys(p).map(Number)
let R = cliq.length
let count = 0
console.log(p[109])
while(cliq.length <= 4 && K.length !== 0) {
    let k = K[0]
    cliq.push(k)
    let neibours =  p[k].map(Number)
    console.log("K", K, "p[k]", neibours)
    K = K.filter(f => {
        f = Number(f)
        //console.log(f, neibours.includes(f))
        return neibours.includes(f)
    })
    console.log("K after filter", K)
}

console.log(cliq)
console.timeEnd("Prime")