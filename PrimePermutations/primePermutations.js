function primePermutations() {
  let  isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false; 
    }
    return true;
  }
  
  let prime = []
  let window = []

  for(let i = 1488; true; i++) {
    let a = i
    let b = a + 3330
    let c = b + 3330

    if(isPrime(a) && isPrime(b) && isPrime(c)) {
      let sA = String(a).split('').sort((a, b) => (a-b)).join('')
      let sB = String(b).split('').sort((a, b) => (a-b)).join('')
      let sC = String(c).split('').sort((a, b) => (a-b)).join('')
      if(sA === sB && sB === sC) {
        let d = Number(String(a) + String(b) + String(c))
        return d
      }
    }
  }
}

console.log(primePermutations());