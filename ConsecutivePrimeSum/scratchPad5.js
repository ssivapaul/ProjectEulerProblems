
function consecutivePrimeSum(limit) {
  // Generate primes up to limit with sieve
  const sieve = new Array(limit).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i < limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j < limit; j += i) sieve[j] = false;
    }
  }
  const primes = [];
  for (let i = 2; i < limit; i++) if (sieve[i]) primes.push(i);
  const primeSet = new Set(primes);

  // Precompute cumulative sums
  const cumSum = [0];
  for (let p of primes) cumSum.push(cumSum[cumSum.length - 1] + p);

  let maxLen = 0;
  let maxSum = 0;

  // Sliding window search
  for (let i = 0; i < cumSum.length; i++) {
    for (let j = i - (maxLen + 1); j >= 0; j--) {
      let sum = cumSum[i] - cumSum[j];
      if (sum >= limit) break;
      if (primeSet.has(sum)) {
        maxLen = i - j;
        maxSum = sum;
      }
    }
  }
  return maxSum;
}


console.time("ConsecutivePrimeSum")
console.log(consecutivePrimeSum(1000000));
console.timeEnd("ConsecutivePrimeSum")

//console.log(consecutivePrimeSum(1000000)); // 997651
