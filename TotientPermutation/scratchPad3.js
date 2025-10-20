
let perm = (arr, r) => {
    let result = []
    let P = (ar, rAr) => {
        if(rAr.length == r) {
            result.push(ar)
            return
        }
        for(let i = 0; i < rAr.length; i++) {
            let nAr = [...ar, rAr[i]]
            let nRar = [...rAr.slice(0, i), ...rAr.slice(i + 1)]
            console.log(nAr, nRar, "i:",i)
            P(nAr, nRar)
        }
    }
    P([], arr)
    return result
}
//console.log(perm([1, 2, 3, 4], 2))

let dPF = (num) =>{
  if (num < 2) {
    return []; // Numbers less than 2 have no prime factors
  }

  let distinctFactors = new Set(); 
  let divisor = 2;
  let n = num
  while (num > 1) {
    if (num % divisor === 0) {
      distinctFactors.add(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }
  return Array.from(distinctFactors);
}

let isPrime = (num) => {
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num != 1;
    if (num % 2 === 0) return false
    for(let i=2; i<sqrtnum + 1; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

const sieve = (n) => {
    let arr = new Array(n + 1).fill(true);
    arr[0] = arr[1] = false;
    for (let i = 2; i * i <= n; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= n; j += i) arr[j] = false;
      }
    }
    let ar = arr.map((v, i) => (v ? i : 0)).filter(i => i!==0)
    return ar;
};

let limit = 10000000
 
let nPerm = []
console.time("TotientPermutation")
let P = sieve(limit)

for(let p1 = 0; p1*p1 <= P.length; p1++) {
    for(let p2 = p1+1; p2 <= P.length; p2++) {
        if(P[p1]*P[p2] > limit) break
        let n = P[p1]*P[p2]
        let phi = (P[p1] - 1)*(P[p2] - 1)
        let nP = String(n).split('').sort().join()
        let phiP = String(phi).split('').sort().join()
        if(nP == phiP) {
            //console.log(n, phi)
            //nPerm.push([dPF(n), n, phi, (n/phi).toFixed(7)])
            nPerm.push([n, (n/phi).toFixed(7)])
        }
    } 
}
let minPh = Infinity
let dpF = []
let nP = 0
for(n of nPerm) {
    if(n[1] < minPh) {
        minPh = n[1]
        //dpF = n[0]
        nP = n[0]
    }
}
//console.log(nPerm)
console.log(nP, dPF(nP), minPh)

console.timeEnd("TotientPermutation")