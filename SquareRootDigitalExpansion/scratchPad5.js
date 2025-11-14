
// BigInt-only, no conversion of huge BigInts to Number
function sqrtDigitalExpansion(n) {
  const prec = 100;                  // number of decimal digits required
  const precBig = BigInt(prec);
  const SCALE = 10n ** (2n * precBig); // 10^(2*prec)
  const TEN_POW_PREC = 10n ** precBig;

  // integer sqrt for BigInt using binary search: returns floor(sqrt(val))
  function bigIntSqrt(val) {
    if (val < 0n) throw new Error("sqrt of negative");
    if (val < 2n) return val;

    // find an upper bound by doubling
    let hi = 1n;
    while (hi * hi <= val) hi <<= 1n;
    let lo = hi >> 1n;

    // binary search in [lo, hi]
    while (lo + 1n < hi) {
      const mid = (lo + hi) >> 1n;
      if (mid * mid <= val) lo = mid;
      else hi = mid;
    }
    return lo;
  }

  // compute the sum of first `prec` decimal digits of sqrt(num) (truncated)
  function heronSqrt(num) {
    const N = BigInt(num) * SCALE; // scaled integer

    // initial guess: floor(sqrt(num)) * 10^prec  (all BigInt)
    const intSqrtNum = bigIntSqrt(BigInt(num)); // floor(sqrt(num))
    let x = intSqrtNum * TEN_POW_PREC;
    if (x === 0n) x = 1n; // safety (not needed for num>=2)

    let prev;
    do {
      prev = x;
      x = (x + N / x) / 2n; // Heron's iteration (BigInt)
    } while (x !== prev);

    // ensure we didn't overshoot (shouldn't normally happen, but safe)
    if (x * x > N) x -= 1n;

    // last `prec` digits of x are the fractional digits of sqrt(num)*10^prec
    let s = x.toString();
    // ensure string has at least prec characters (pad left if necessary)
    if (s.length < prec) s = s.padStart(prec, '0');
    const tail = s.slice(-prec); // last `prec` chars (string)
    let sum = 0;
    for (let ch of tail) sum += ch.charCodeAt(0) - 48;
    return sum;
  }

  let total = 0;
  for (let i = 2; i <= n; i++) {
    const r = Math.floor(Math.sqrt(i)); // using Number just to detect perfect squares (safe for small i)
    if (r * r === i) continue; // skip perfect squares
    total += heronSqrt(i);
  }
  return total;
}

// Tests
console.time("SquareRoot");
console.log(sqrtDigitalExpansion(2));    // 475
console.log(sqrtDigitalExpansion(50));   // 19543
console.log(sqrtDigitalExpansion(100));  // 40886
console.timeEnd("SquareRoot");
