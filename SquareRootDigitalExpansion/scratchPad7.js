// integer square root: floor(sqrt(x))
function bigIntSqrt(x) {
  if (x < 0n) throw new Error("sqrt of negative");
  if (x < 2n) return x;

  let lo = 1n;
  let hi = x >> 1n;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1n;
    const sq = mid * mid;
    if (sq === x) return mid;      // perfect square
    if (sq < x) lo = mid + 1n;
    else hi = mid - 1n;
  }
  return hi; // floor(sqrt(x))
}

function isPerfectSquareBig(n) {
  const root = bigIntSqrt(n);
  return root * root === n;
}

