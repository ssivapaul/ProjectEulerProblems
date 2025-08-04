function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const primes = [2];

  const getPrimesUpTo = (limit) => {
    let last = primes[primes.length - 1];
    for (let i = last + 1; i <= limit; i++) {
      if (isPrime(i)) primes.push(i);
    }
  };

  const getDistinctPrimeFactors = (n) => {
    let factors = new Set();
    let temp = n;

    getPrimesUpTo(Math.floor(Math.sqrt(n)));

    for (let p of primes) {
      if (p * p > temp) break;
      if (temp % p === 0) {
        factors.add(p);
        while (temp % p === 0) {
          temp /= p;
        }
      }
    }

    if (temp > 1) factors.add(temp); // remaining large prime

    return factors.size;
  };

  let consecutive = 0;
  let i = 2;

  while (true) {
    if (getDistinctPrimeFactors(i) === targetNumPrimes) {
      consecutive++;
      if (consecutive === targetConsecutive) {
        return i - targetConsecutive + 1;
      }
    } else {
      consecutive = 0;
    }
    i++;
  }
}


console.log(distinctPrimeFactors(2, 2)); // 14
console.log(distinctPrimeFactors(3, 3)); // 644
console.log(distinctPrimeFactors(4, 4)); // 134043