function consecutivePrimeSum(limit) {
  // Helper to check primality
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Generate all primes below limit
  const primes = [];
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) primes.push(i);
  }

  // Precompute cumulative sums
  const cumSum = [0];
  for (let p of primes) {
    cumSum.push(cumSum[cumSum.length - 1] + p);
  }

  let maxLength = 0;
  let result = 0;

  for (let i = 0; i < cumSum.length; i++) {
    for (let j = i - (maxLength + 1); j >= 0; j--) {
      let sum = cumSum[i] - cumSum[j];
      if (sum >= limit) break;
      if (isPrime(sum)) {
        maxLength = i - j;
        result = sum;
      }
    }
  }

  return result;
}

console.log(consecutivePrimeSum(1000));