let singularIntRightTriangles = (n) => {
    let gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    let sqrLimit = Math.floor(Math.sqrt(n))
    let rT = {}

    for(let p = 1; p < sqrLimit; p++) {
        for(let m = p + 1; m < p + sqrLimit; m++) {
            if(gcd(m, p) == 1 && (m + p) % 2  !== 0) {
                for(let k = 1; true; k++) {
                    let a = k*m*m - k*p*p, b = 2*k*m*p, c = k*m*m + k*p*p
                    let l = a + b + c
                    if(l > n) break
                    rT[l] == undefined ? rT[l] = [[a, b, c]] : rT[l].push([a, b, c])
                }
            }
        }
    }
    let flteredRT = Object.fromEntries(Object.entries(rT).filter(([k, v]) => v.length == 1))
    return Object.entries(flteredRT).length
}

//console.log(rT)

console.time("SIRT")
console.log(singularIntRightTriangles(48))
console.log(singularIntRightTriangles(700000))
console.log(singularIntRightTriangles(1000000))
console.log(singularIntRightTriangles(1500000))
console.timeEnd("SIRT")
