function goldbachsOtherConjecture() {
  let  isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false; 
  }

  return true;
  }

  for(let i = 3; true; i += 2) {
    if(isPrime(i)) continue
    let goldbach = false
    for(let j = 1; 2*j*j < i; j++) {
        if (isPrime(i - 2*j*j))  {
            goldbach = true
            break
        }
    }
    if(!goldbach) return i
  } 
}

console.log(goldbachsOtherConjecture());