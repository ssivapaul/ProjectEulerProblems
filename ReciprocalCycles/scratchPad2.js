let  getRecCy = (re, de) => {
  let rems = []; // Stores {remainder: index_in_decimal_digits}
  let i = 0;
    let r = ''
  while (re !== 0 && !rems.includes(re)) {
    rems.push(re);
    re *= 10;
    let d = Math.floor(re/de);
    r += d;
    re %= de;
    i++;
  }
  return [re, i, de]
}

  let RCy = (n) => {
    let max = 0
    maxDen = 0
    for(let i = 2; i <= n; i++) {
        let gR = getRecCy(1, i)
        if (gR[0] == 0)  continue
        if(gR[1] > max) {
            max = gR[1]
            maxDen = gR[2]
        }
    }
    return maxDen
}

console.log(RCy(1000))
/*
reciprocalCycles(700) should return a number.
Waiting:2. reciprocalCycles(700) should return 659.
Waiting:3. reciprocalCycles(800) should return 743.
Waiting:4. reciprocalCycles(900) should return 887.
Waiting:5. reciprocalCycles(1000) should return 983.

//console.log(getRecCy(1, 2001));   // Output: 0.(3)
//console.log(getRecCy(1, 8));   // Output: 0.(142857)
//console.log(getRecCy(50, 22)); // Output: 2.27(27)
//console.log(getRecCy(1, 2));   // Output: 0.5
*/