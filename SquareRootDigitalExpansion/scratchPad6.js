

function highPrecisionSqrtBigInt(n, precision = 0) {
  if (n < 0n) throw new Error("Cannot compute square root of negative BigInt.");
  if (n === 0n) return 0n;

  let low = 0n;
  let high = n;
  let result = 0n;

  // Find the integer part using binary search
  while (low <= high) {
    let mid = low + (high - low) / 2n;
    if (mid * mid === n) {
      return mid;
    } else if (mid * mid < n) {
      result = mid;
      low = mid + 1n;
    } else {
      high = mid - 1n;
    }
  }

  // Refine with more precision if needed (for fractional part)
  // This part requires careful handling of BigInt and scaling for decimal places.
  // For truly arbitrary precision with decimals, you would need to manage
  // the 'decimal point' by multiplying the input by a power of 100
  // before taking the square root, and then dividing the result.
  // The 'precision' parameter here would dictate how many decimal places.

  // Example for adding decimal precision for BigInt:
  // let scaledN = n * (10n ** (2n * BigInt(precision)));
  // ... then apply binary search or Newton's method to scaledN,
  // ... and finally divide the result by (10n ** BigInt(precision))

  return result; // Returns the integer part for now
}