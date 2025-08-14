
let digitPick = (n) =>{
  if (n <= 0) return []; // Return an empty array for non-positive n
  let dP = [];
  let maxD = Math.pow(2, n) - 1; // Calculate 2^n - 1
  for (let i = 1; i <= maxD; i++) {
    let dS = i.toString(2);
    dS = dS.padStart(n, '0');
    dP.push(dS);
  }
  return dP;
}


let dRep = (nA, dP, n) => {
    dP.forEach((d, i, _) => {if(d == '1') nA[i] = n})
    return Number(nA.join(''))
}

let isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let getPrime = (index) => {
    if (index < 0) {
        return "Index must be a non-negative integer.";
    }
    let count = 0;
    let num = 2;

    while (true) {
        if (isPrime(num)) {
            if (count === index) {
                return num;
            }
            count++;
        }
        num++;
    }
}

console.time("scratchPad3")


console.timeEnd("scratchPad3")
