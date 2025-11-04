
// coinPartitions(divisor)
// returns the smallest n > 0 such that p(n) % divisor === 0
// Uses Euler's generalized pentagonal number recurrence and works with modulo arithmetic.
function coinPartitions(divisor) {
  // p[0] = 1
  const p = [1];

  // helper for modulo (keeps non-negative)
  const mod = (x) => {
    let r = x % divisor;
    if (r < 0) r += divisor;
    return r;
  };

  for (let n = 1; ; n++) {
    let total = 0;
    
    for (let k = 1; ; k++) {
      const g1 = (k * (3 * k - 1)) >> 1; 
      if (g1 > n) break;
      const sign = (k % 2 === 1) ? 1 : -1;
      total += sign * p[n - g1];

      const g2 = (k * (3 * k + 1)) >> 1;
      if (g2 > n) {
        total = mod(total);
        continue;
      }
      total += sign * p[n - g2];
      total = mod(total);
    }

    p[n] = mod(total);
    if (p[n] === 0) return n;
  }
}
