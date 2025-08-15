

let primeDigitReplacements = (num) => {
    let LIMIT = 999999

    let sieve = new Uint8Array(LIMIT + 1)
    sieve.fill(1);
    sieve[0] = sieve[1] = 0;
    for (let i = 2; i * i <= LIMIT; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= LIMIT; j += i) sieve[j] = 0;
        }
    }
    let primes = [];
    for (let i = 11; i <= LIMIT; i++) if (sieve[i]) primes.push(i);
    //console.log(primes)
    let visited = new Set()
    for(let p of primes) {
        let c = String(p)
        //let cD = String(p).split('')
        //let len = cD.length
        let len = c.length
        for(let i = 1; i < (1 << len-1); i++) {
            if(i === (1 << len) - 1) continue
            let cD = c.split('')
            for(let j = 0; j < len; j++) {
                if(i & (1 << j)) cD[j] = '*'
            }
            let d = cD.join('')
            //console.log(d)
            if(visited.has(d)) continue
            visited.add(d)

            let pD = (d[0] === '*') ? [1,2,3,4,5,6,7,8,9] : [0,1,2,3,4,5,6,7,8,9]
            let first = null
            let count = 0
            for(p of pD) {
                let dP = Number(d.replace(/\*/g, p))
                if(sieve[dP]) {
                    count++
                    if(first == null) first = dP
                }
            }
            if(count >= num) return first
        }
    }
    return 0
}

console.time("PrimeDigitReplacements")
console.log(primeDigitReplacements(8))
console.timeEnd("PrimeDigitReplacements")
