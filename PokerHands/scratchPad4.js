  
  let p = 'TAJA9'
  
  let group = (pH) => {
    let v = {2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, T: 0, J: 0, Q: 0, K: 0, A: 0}
    let vi = {2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7, 9: 8, T: 9, J: 10, Q: 11, K: 12, A: 13}
    for(k of pH) v[k] = ((v[k] || 0) + 1)
    let vF = Object.entries(v).filter(([k, v]) => v != 0)
    let F = Object.fromEntries(vF)
    Object.keys(F).forEach(k => F[k] = [F[k], vi[k]])
    return F
  }

  console.log(group(p))