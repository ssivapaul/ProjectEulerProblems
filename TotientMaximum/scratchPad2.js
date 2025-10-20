

function totientMaximum(limit) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
  let n = 1;
    let p_1 = 1;
  for (let p of primes) {
    if (n * p > limit) break;
    n *= p;
    p_1 *= (p - 1)
     console.log("n:", n, "p:", p, "p_1:", p_1, "n/pHi", (n/p_1).toFixed(2))
  }

  return n;
}

// Tests
console.time("Totient");
console.log(totientMaximum(100));       // 30
console.log("----------")
console.log(totientMaximum(10000));    // 2310
console.log("----------")
console.log(totientMaximum(500000));   // 30030
console.log("----------")
console.log(totientMaximum(1000000));  // 510510
console.timeEnd("Totient");


