
function sqrtDigitalExpansion(n) {
  const prec = 100;               // number of decimal digits we want
  const precBig = BigInt(prec);   // BigInt version for pow ops
  const SCALE = 10n ** (2n * precBig); // 10^(2*prec)

  function heronSqrt(num) {
    const N = BigInt(num) * SCALE;               // scaled integer: num * 10^(2*prec)

    // safe initial guess: floor(sqrt(num)) * 10^prec
    // (Math.sqrt(num) is small for typical problem sizes, so safe)
    let x = BigInt(Math.floor(Math.sqrt(num))) * (10n ** precBig);
    if (x === 0n) x = 1n; // safety for num = 0 (not used here but safe)

    let prev;
    do {
      prev = x;
      x = (x + N / x) / 2n;
    } while (x !== prev);

    // ensure we didn't overshoot: floor(sqrt(N)) must satisfy x*x <= N
    // If it overshot by 1, decrement once.
    if (x * x > N) x -= 1n;

    // last `prec` digits of x are the fractional digits of sqrt(num)*10^prec
    const s = x.toString();
    const tail = s.slice(-prec); // last `prec` chars (string). No BigInt->Number conversion of huge values.
    // If tail is shorter than `prec` (shouldn't happen because of scaling), left-pad with zeros:
    const decDigits = tail.length < prec ? tail.padStart(prec, '0') : tail;

    // sum digits
    let sum = 0;
    for (let ch of decDigits) sum += ch.charCodeAt(0) - 48;
    return sum;
  }

  let total = 0;
  for (let i = 2; i <= n; i++) {
    const r = Math.floor(Math.sqrt(i));
    if (r * r === i) continue; // skip perfect squares
    total += heronSqrt(i);
  }
  return total;
}

// test
console.time("SquareRoot");
console.log(sqrtDigitalExpansion(2));    // 475
console.log(sqrtDigitalExpansion(50));   // 19543
console.log(sqrtDigitalExpansion(100));  // 40886
console.timeEnd("SquareRoot");
