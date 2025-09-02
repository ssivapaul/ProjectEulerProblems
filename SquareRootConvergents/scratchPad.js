
function squareRootConvergents(n) {
  let count = 0
  let nP = 1n
  let dP = 2n
  for(let i = 2; i <= n; i++) {
    let n = dP
    let d = 2n*dP + nP
    nP = n
    dP = d
    if(String(d+n).length > String(d).length) count++
  }
  return count;
}

squareRootConvergents(1000);