


function totientSieve(limit) {
  // Initialize array: φ[i] = i for all i
  const phi = Array.from({ length: limit + 1 }, (_, i) => i);
  // Sieve process
  for (let p = 2; p < limit/2; p++) {
    if (phi[p] === p) { // p is prime
      for (let k = p; k <= limit; k += p) {
        phi[k] -= phi[k] / p; // apply φ(k) *= (1 - 1/p)
      }
    }
  }
 
  return phi;
}

function totientMaximum(limit) {
  const phi = totientSieve(limit);
  let maxRatio = 0;
  let maxN = 0;

  for (let n = 2; n <= limit; n++) {
    const ratio = n / phi[n];
    if (ratio > maxRatio) {
      maxRatio = ratio;
      maxN = n;
    }
  }

  return maxN;
}

// Tests
console.time("Totient");
console.log(totientMaximum(100));       // 6
console.log(totientMaximum(10000));    // 2310
console.log(totientMaximum(500000));   // 30030
console.log(totientMaximum(1000000));  // 510510
console.timeEnd("Totient");

/*
Explanation
φ(i) starts as i for all i.
For each prime p, we multiply φ(k) by (1 - 1/p) for every multiple k of p.
This ensures we’re applying the correct totient factorization rule efficiently.
The loop for (let k = p; k <= limit; k += p) works like the Sieve of Eratosthenes.
*/