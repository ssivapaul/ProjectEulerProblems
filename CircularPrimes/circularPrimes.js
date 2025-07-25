function circularPrimes(n) {
  let isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n%2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false; 
  }
  return true; 
  }
//-----------------------------------
  let count = 0
  let arr = []
  for(let i = 2; i < n; i++) {
    if (isPrime(i)) {
      let str = String(i)
      let n = str.length
      while(n > 0) {
        let s = str.slice(-n) + str.slice(0, -n)
        if(!isPrime(Number(s))) break
          --n
      }
      if (n === 0) {
        count++
        arr.push(i)
      }
    }
  }
  return count
}

circularPrimes(1000000);