function selfPowers(power, lastDigits) {
  let bigIntPow = (base, exp) => {
    let result = 1n;
    while (exp > 0n) {
        if (exp % 2n === 1n) result *= base;
        base *= base;
        exp /= 2n;
    }
    return result;
  }
let sum = 0n
  for(let i = 1n; i <= power; i++) {
    sum += bigIntPow(i, i)
  }
  return Number(String(sum).slice(-lastDigits))

}

console.log(selfPowers(1000, 10));