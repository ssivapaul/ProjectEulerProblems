
let PD = []
let maxPD = 0
let n = 8
for (let i = 1; i < 9999; i++) {
    m = 1
    let P = String(i)
    while (m++ < n) {
        P += String(i*m) 
        if (P.split('').sort().join('') === '1234567') {
            if(Number(P) > maxPD) maxPD = Number(P)
            PD.push([P, i, m])
        }
    }
}

console.log(PD)
console.log(maxPD)