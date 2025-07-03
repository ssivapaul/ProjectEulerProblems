
/*

let primeNums = (n) => {
    const primes = [];
    const sieve = new Array(n + 1).fill(true); // Initialize all numbers as potentially prime
    sieve[0] = false; // 0 is not prime
    sieve[1] = false; // 1 is not prime

    for (let p = 2; p * p <= n; p++) {
        if (sieve[p]) {
            for (let i = p * p; i <= n; i += p) {
                sieve[i] = false;
            }
        }
    }
    for (let i = 2; i <= n; i++) {
        if (sieve[i]) primes.push(i);        
    }
    return primes;
}

console.log(primeNums(20));


  let primeNums = (n) => {
    const primes = [];
    const sieve = new Array(n + 1).fill(true); // Initialize all numbers as potentially prime
    sieve[0] = false; // 0 is not prime
    sieve[1] = false; // 1 is not prime

    for (let p = 2; p * p <= n; p++) {
      if (sieve[p]) {
        for (let i = p * p; i <= n; i += p) {
          sieve[i] = false;
        }
      }
    }
    for (let i = 2; i <= n; i++) {
      if (sieve[i]) primes.push(i);
    }
    return primes;
    };

 let isPrime = (num) => {
      // Numbers less than or equal to 1 are not prime.
      if (num <= 1) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;
      for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false; // Found a divisor, so it's not prime.
      }
      return true; // No divisors found, so it's prime.
    };

     let isPrime = (number) => {
        num = BigInt(number);
      if (num <= 1n) return false;
      if (num <= 3n) return true;
      if (num % 2n === 0n || num % 3n === 0n) return false;

      for (let i = 5n; i * i <= num; i += 6n) {
        if (num % i === 0n || num % (i + 2n) === 0n) {
          return false;
        }
      }
      return true;
    }
*/

function largestPrimeFactor(number) {
    let ld;
    let qu = number;
    while (qu % 2 === 0) {
      ld = 2;
      qu /= 2;
    }

    let di = 3;
    while (qu > 1) {
      while (qu % di === 0) {
        qu /= di;
        ld = di;
      }
      di += 2;
    }
    return ld;
}

console.log(largestPrimeFactor(21));