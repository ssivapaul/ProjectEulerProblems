function substringDivisibility(n) {
  let panDigit = (d) => {
    let base = '0123456789'.slice(0, d+1)
    let P = []
    let permu = (permut, remain) => {
      if(remain.length === 0) P.push(permut)       
      for(let i = 0; i < remain.length; i++) {
        let curPer = permut+ remain[i]
        let curRem = remain.slice(0, i) + remain.slice(i+1)
        permu(curPer, curRem)
        //curPer.pop()
      }
    }
    permu([], base)
    return P
  }

  let sum = 0
  let P = [2, 3, 5, 7, 11, 13, 17]
  for( let pan of panDigit(n)) {
    let pass = true
    for(let i = 1; i <= n-2; i++) {
        let d = Number(pan.slice(i, 3+i))
        if(d%P[i-1] !== 0) {
            pass = false
            break            
        }
    }
    if(pass) sum += Number(pan)
  }
  return sum
}

substringDivisibility(5);