
function powerfulDigitSum(n) {
  // Helper function
  let sumDigits = (digit) => {
    let sum = 0
    let str = digit.toString().split('')
    str.forEach(s => { sum += Number(s) })
    return sum
  }

// Main routine
  let maxSum = 0
  let bn = BigInt(n)
  for(let a = 1n; a < bn; a++) {
    for(let b = 1n; b < bn; b++) {
      let c = a**b
      let sum = sumDigits(c)
      if(sum > maxSum) maxSum = sum
    }
  }
  return maxSum;
}


console.time("DigiSum")
console.log(powerfulDigitSum(10));
console.log(powerfulDigitSum(50));
console.log(powerfulDigitSum(75));
console.log(powerfulDigitSum(100));
console.timeEnd("DigiSum")