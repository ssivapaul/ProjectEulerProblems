

function sqrtDigitalExpansion(n) {
  const PREC = 100n;
  const SCALE = 10n ** (PREC * 2n);

  function heronSqrt(num) {
    const N = BigInt(num) * SCALE;
    let xCurr = BigInt(Math.floor(Math.sqrt(num) * 10 ** Number(PREC))); // better initial guess
    let xPrev;

    do {
      xPrev = xCurr;
      xCurr = (xPrev + N / xPrev) / 2n;
    } while (xPrev - xCurr > 1n || xCurr - xPrev > 1n);

    // Truncate (not round up)
    if (xCurr * xCurr > N) xCurr -= 1n;

    // last 100 digits correspond to decimal digits
    const s = xCurr.toString();
    const deciD = s.slice(-Number(PREC));
    return [...deciD].reduce((a, b) => a + Number(b), 0);
  }

  let total = 0;
  for (let i = 2; i <= n; i++) {
    let sq = Math.floor(Math.sqrt(i));
    if (sq * sq === i) continue;
    total += heronSqrt(i);
  }
  return total;
}

console.log(sqrtDigitalExpansion(2));    // 475 ✅
console.log(sqrtDigitalExpansion(50));   // 19543 ✅
console.log(sqrtDigitalExpansion(100));  // 40886 ✅
