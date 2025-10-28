
let gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.time("SIRT")
let limit = 1000000
let sqrLimit = Math.floor(Math.sqrt(limit))
let rTri = []
for(let p = 1; p < sqrLimit; p++) {
    for(let m = p + 1; m < p + sqrLimit; m++) {
        if(gcd(m, p) == 1 && (m + p) % 2  !== 0) {
            for(let k = 1; true; k++) {
                let a = k*m*m - k*p*p
                let b = 2*k*m*p
                let c = k*m*m + k*p*p
                if(a > 0 && b > 0 && c > 0) {
                    if((a+b+c) > limit) break
                    rTri.push([a, b, c, (a+b+c), m, p])
                }
            }
            
        }
    }
}
console.log(rTri.slice(-100))
console.log(rTri.length)
console.log(rTri.sort((a, b) => (a[3] - b[3])))
console.timeEnd("SIRT")
