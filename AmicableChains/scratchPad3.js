
    let isPrime = (n) => {
        if (n == 2 || n == 3) return true
        if (n <= 1 || n % 2 == 0) return false;
        let sqrt = Math.sqrt(n)
        for (let i = 3 ; i <= sqrt; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }
    let prime = (n) => {
        let primes = [];
        for (let i = 1; i <= n; i++) {
            if (isPrime(i)) primes.push(i);
        }
        return primes;
    }

    let  divSum = (limit) => {
        let n = limit
        let pm = prime(Math.floor(n/2))
        let divSum = 1
        for(p of pm) {
            if(isPrime(n)) {
                divSum *= (1 + n)
                break
            }
            let ds = i = 1
            while (n%p == 0) {
                n /= p
                ds += p**i
                i++
            }
            divSum *= ds
        }
        divSum -= limit
        return divSum
    }


console.time("Prime")
console.log(divSum(12))
console.timeEnd("Prime")
