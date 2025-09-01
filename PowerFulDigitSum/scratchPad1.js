

function powerfulDigitSum(n) {
  // Make sure n is a plain Number (handles cases where tests pass 3n)
  const limit = Number(n);
  if (!Number.isFinite(limit) || limit < 2) return 0;

  // sum digits of a BigInt (or number)
  const sumDigits = (x) =>
    x.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);

  let maxSum = 0;

  for (let a = 1; a < limit; a++) {
    const aBig = BigInt(a);
    let c = 1n;                // will hold aBig^b
    for (let b = 1; b < limit; b++) {
      c *= aBig;               // now c === aBig**BigInt(b)
      const s = sumDigits(c);
      if (s > maxSum) maxSum = s;
    }
  }

  return maxSum;
}
