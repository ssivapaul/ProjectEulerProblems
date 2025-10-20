

let totientMaximum = (limit) =>{
    let dPFact = (n) =>{
        if (n < 2) return []; 
        let dFact = new Set(); 
        let d = 2;
        while (n > 1) {
            if (n % d === 0) {
            dFact.add(d); 
            n /= d;
            } else if(isPrime(n)) {
                dFact.add(n);
                break
            } else{
                d++;
            }
        }
        return Array.from(dFact);
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
    // main routine
    let maxPhi = 0, maxT = 0
    let dFact = []

    for(let i = 2; i < limit; i++) {
        if(isPrime(i)) continue
        let pH = i
        dFact = dPFact(i)
        for(let d of dFact) {
            pH = pH*(d - 1)
            pH /= d
        }
        pH = Number((i/pH).toFixed(2))
        if(maxPhi < pH) {
            maxPhi = pH
            maxT = i
        }
        console.log(dFact, i, pH)
    }
    return maxT
}

console.time("Totient")
//console.log(totientMaximum(100));       // 6
//console.log(totientMaximum(10000));    // 2310
console.log(totientMaximum(500000));   // 30030
//console.log(totientMaximum(1000000));  // 510510
console.timeEnd("Totient")