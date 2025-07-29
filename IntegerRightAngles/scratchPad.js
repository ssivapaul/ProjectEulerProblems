
let n = 1000
let P ={}

for (let p = 3; p < n; p++) {
    for (let a = 1; a < p; a++) {
        for (let b = 1; b < a; b++) {
            let c = Math.sqrt(a*a + b*b)
            if(c%1 === 0 && p === a+b+c)  P[p] = (P[p] || 0) + 1;
        }
    }
}

let maxV = 0
let maxP = ''
for(let [k, v] of Object.entries(P)) {
    if(v > maxV) {
        maxV = v
        maxP = k
    }
}
