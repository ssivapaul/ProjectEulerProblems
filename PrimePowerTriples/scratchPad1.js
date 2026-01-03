

//let sieveOfEratosthenes = (n) => {
let generatePrime = (n) => {
  let isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let p = 2; p * p <= n; p++) {
    if (isPrime[p] === true) {
        for (let i = p * p; i <= n; i += p) isPrime[i] = false;
    }
  }

  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i] === true) primes.push(i);
  }
  return primes;
}


let isPrime = (n) => {
    if(n <= 0 || n == 1) return false
    if(n == 2 || n == 3) return true
    if(n % 2 == 0) return false
    for(let i = 3; i <= Math.sqrt(n); i += 2) {
        if(n % i == 0 && n != i) return false
    }
    return true
}


console.time("Prime")
let n = 50000000
//let n = 5000000
//let n = 500000
//let n = 10035
//let n = 50
let pLimit = Math.floor(n**(1/2))
let qLimit = Math.floor(n**(1/3))
let rLimit = Math.floor(n**(1/4))
let p = generatePrime(pLimit)
let q = generatePrime(qLimit)
let r = generatePrime(rLimit)
console.log(p.length, q.length, r.length)
console.log(p[p.length-1], q[q.length-1], r[r.length-1])
let t = 0
let tripple = new Set()

for(let i = 0; i < p.length; i++) {
    for(let j = 0; j < q.length; j++) {
        for(let k = 0; k < r.length; k++) {
            t = p[i]**2 + q[j]**3 + r[k]**4
            tripple.add(t)
            if(t > n) break
        }
    }
}
//console.log(tripple)
let sT = Array.from(tripple).sort((a, b) => a - b)
//console.log(sT)
for(let i = 0; i < sT.length; i++) {
    if(sT[i] >= n) {
        console.log(sT[i], sT[i-1])
        console.log(i)
        break
    }
}
console.timeEnd("Prime")

/*
primePowerTriples(50) should return a number.
primePowerTriples(50) should return 4.
primePowerTriples(10035) should return 684.
primePowerTriples(500000) should return 18899.
primePowerTriples(5000000) should return 138932.
primePowerTriples(50000000) should return 1097343.

Problem 87: Prime power triples
The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. In fact, there are exactly four numbers below fifty that can be expressed in such a way:

28 = 22 + 23 + 24
33 = 32 + 23 + 24
49 = 52 + 23 + 24
47 = 22 + 33 + 24

How many numbers below n can be expressed as the sum of a prime square, prime cube, and prime fourth power?
*/