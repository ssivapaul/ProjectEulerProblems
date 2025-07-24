function pandigitalProducts(n) {
  let m = '123456789'.slice(0, n)
  let sum = 0
  let haspanProduct = (n, m) => {
    for(let i = 1; i <Math.sqrt(n); i++) {
      if(n%i === 0) {
        let p = (n.toString() + i.toString() + (n/i).toString()).split('').sort().join('')
        if(p === m) return true
      }
    }
    return false
  }

  for (let n = 1; n < 10000; n++) {
    if (haspanProduct(n, m)) sum += n
  }
  return sum
}

pandigitalProducts(4);