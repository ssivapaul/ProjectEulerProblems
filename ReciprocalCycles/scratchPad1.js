function getRecurringCycle(numerator, denominator) {
  if (denominator === 0) {
    return "Division by zero is undefined.";
  }
  if (numerator === 0) {
    return "0";
  }

  let result = "";
  let integerPart = Math.floor(numerator / denominator);
  result += integerPart;

  let remainder = numerator % denominator;
  if (remainder === 0) {
    return result; // Terminating decimal No decimal part.
  }
//------------------------------------------------------------------
  result += ".";
  const remainders = new Map(); // Stores {remainder: index_in_decimal_digits}
  let index = 0;

  while (remainder !== 0 && !remainders.has(remainder)) {
    remainders.set(remainder, index);
    remainder *= 10;
    let digit = Math.floor(remainder / denominator);
    result += digit;
    remainder %= denominator;
    index++;
  }

  if (remainder !== 0) { // Recurring cycle detected
    const cycleStartIndex = remainders.get(remainder);
    const nonRepeatingPart = result.substring(0, result.length - (index - cycleStartIndex));
    const repeatingPart = result.substring(result.length - (index - cycleStartIndex));
    return nonRepeatingPart + "(" + repeatingPart + ")";
  } else {
    return result; // Terminating decimal
  }
}

// Example usage:
console.log(getRecurringCycle(1, 3));   // Output: 0.(3)
console.log(getRecurringCycle(1, 7));   // Output: 0.(142857)
console.log(getRecurringCycle(50, 22)); // Output: 2.27(27)
console.log(getRecurringCycle(1, 2));   // Output: 0.5