function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  const LIMIT = 200000; // Safe upper bound for 4 consecutive 4-prime-factored numbers
  const factorCount = new Array(LIMIT).fill(0);

  // Modified Sieve to count distinct prime factors for each number
  for (let i = 2; i < LIMIT; i++) {
    if (factorCount[i] === 0) {
      // i is prime
      for (let j = i; j < LIMIT; j += i) {
        factorCount[j]++;
      }
    }
  }

  let consecutive = 0;
  for (let i = 2; i < LIMIT; i++) {
    if (factorCount[i] === targetNumPrimes) {
      consecutive++;
      if (consecutive === targetConsecutive) {
        return i - targetConsecutive + 1;
      }
    } else {
      consecutive = 0;
    }
  }

  return -1;
}

console.log(distinctPrimeFactors(2, 2)); // 14
console.log(distinctPrimeFactors(3, 3)); // 644
console.log(distinctPrimeFactors(4, 4)); // 134043