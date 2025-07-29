
function pandigitalMultiples(k) {
    let n = '123456789'.slice(0, k)
    console.log("n : ", n)
  let maxPD = 0
  for (let i = 1; i < 9999; i++) {
    let m = 1
    let P = String(i)
    while (m++ < 8) {
        P += String(i*m) 
        if (P.split('').sort().join('') === n) {
            if(Number(P) > maxPD) maxPD = Number(P)
        }
    }
  }
  return maxPD
}

console.log(pandigitalMultiples(8));
console.log(pandigitalMultiples(9));