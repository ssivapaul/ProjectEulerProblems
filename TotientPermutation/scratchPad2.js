

function totientPermutation(limit) {
  // Sieve to generate primes up to sqrt(limit)
  const sieve = (n) => {
    let arr = new Array(n + 1).fill(true);
    arr[0] = arr[1] = false;
    for (let i = 2; i * i <= n; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= n; j += i) arr[j] = false;
      }
    }
    return arr.map((v, i) => (v ? i : 0)).filter(Boolean);
  };

  const primes = sieve(Math.floor(Math.sqrt(limit)) + 1);
  let minRatio = Infinity;
  let result = 0;

  for (let i = 0; i < primes.length; i++) {
    const p = primes[i];
    for (let j = i + 1; j < primes.length; j++) {
      const q = primes[j];
      const n = p * q;
      if (n > limit) break;
      const phi = (p - 1) * (q - 1);
      const ratio = n / phi;
      // Quick digit length check before full permutation test
      const sN = String(n), sPhi = String(phi);
      if (sN.length !== sPhi.length) continue;
      // Check if permutation
      if (sN.split('').sort().join('') === sPhi.split('').sort().join('')) {
        if (ratio < minRatio) {
          minRatio = ratio;
          result = n;
        }
      }
    }
  }

  return result;
}
/*
console.log(totientPermutation(10000));      // 4435
console.log(totientPermutation(100000));     // 75841
console.log(totientPermutation(500000));     // 474883
console.log(totientPermutation(10000000));   // 8319823 ✅
*/

console.time("totientPermutation")
console.log(totientPermutation(10000)) // 4435
console.log(totientPermutation(100000)) // 75841
console.log(totientPermutation(500000)) // 474883
console.log(totientPermutation(10000000)) // 8319823
console.timeEnd("totientPermutation")