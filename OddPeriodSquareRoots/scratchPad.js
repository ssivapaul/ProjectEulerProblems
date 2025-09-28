
function oddPeriodSqrts(n) {
  let oddPeriod = (n) => {
    let b = 1, d = 1, an = 1
    let An = []
    let f = Math.floor(Math.sqrt(n))
    if(f == Math.sqrt(n)) return 0
    let c = f

    while(true) {
      d = (n - c**2)/b
      an = Math.floor((f + c)/d)
      An.push(an)
      c = an*d - c
      b = d
      if(b == 1 && c == f) break
    }
    if(An.length % 2 !== 0) return 1
      return 0
  }

  let count = 0
  for(let i = 2; i <= n; i++) count += oddPeriod(i)
  return count
}


console.time("OddPeriod")
console.log(oddPeriodSqrts(1000))
console.timeEnd("OddPeriod")