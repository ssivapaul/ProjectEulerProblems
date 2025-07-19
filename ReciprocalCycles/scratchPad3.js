function reciprocalCycles(n) {
  let  getRecCy = (re, de) => {
    let rems = {}; // Stores {remainder: index_in_decimal_digits}
    let i = 0;
    while (re !== 0 && rems[re] === undefined) {
      rems[re] = i;
      re *= 10;
      re %= de;
      i++;
    }
    if (re === 0) return 0 // no recycle
    return i-rems[re] // cycle length
  }

  let max = 0
  let maxDen = 0
  
  for(let i = 2; i < n; i++) {
    let cyclen = getRecCy(1, i)
    if(cyclen > max) {
      max = cyclen
      maxDen = i
    }
  }
  return maxDen
}

console.log(reciprocalCycles(1000));