
function consecutivePrimeSum(limit) {
  // 1. Sieve of Eratosthenes
  const sieve = new Array(limit).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i < limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j < limit; j += i) sieve[j] = false;
    }
  }

  // 2. Extract primes into one array (needed for sliding window)
  const primes = [];
  for (let i = 2; i < limit; i++) if (sieve[i]) primes.push(i);

  let maxLen = 0;
  let maxSum = 0;

  // 3. Sliding window without storing full cumSum
  for (let start = 0; start < primes.length; start++) {
    let sum = 0;
    for (let end = start; end < primes.length; end++) {
      sum += primes[end];
      if (sum >= limit) break;
      let length = end - start + 1;
      if (length > maxLen && sieve[sum]) {
        maxLen = length;
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
