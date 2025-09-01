

function powerfulDigitSum(n) {
  // Helper function
  let sumDigits = (digit) => {
    let sum = 0
    let charA = String(digit).split('')
    charA.forEach(s => { sum += Number(s) })
    return sum
  }

// Main routine
  let maxSum = 0
  for(let a = 1; a < n; a++) {
    let bigA = BigInt(a)
    let bigC = 1n
    for(let b = 1; b < n; b++) {
      bigC *= bigA
      let sum = sumDigits(bigC)
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