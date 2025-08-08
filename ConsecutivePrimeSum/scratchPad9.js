
function consecutivePrimeSum(limit) {
  // Simple incremental primality check using small primes found so far
  const foundPrimes = [];
  function isPrime(n) {
    if (n < 2) return false;
    let max = Math.sqrt(n);
    for (let p of foundPrimes) {
      if (p > max) break;
      if (n % p === 0) return false;
    }
    return true;
  }

  // Sliding window variables
  const window = [];
  let sum = 0;
  let maxLen = 0;
  let maxSum = 0;

  // Generate primes and maintain sliding window
  for (let candidate = 2; candidate < limit; candidate++) {
    if (isPrime(candidate)) {
      foundPrimes.push(candidate);
      window.push(candidate);
      sum += candidate;

      // Shrink window from the left if sum exceeds limit
      while (sum >= limit) {
        sum -= window.shift();
      }

      // Check if current sum is prime and update max
      if (isPrime(sum) && window.length > maxLen) {
        maxLen = window.length;
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
