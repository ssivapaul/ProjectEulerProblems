function totientMaximum(limit) {
    // Helper function
    let gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
    // Helper function
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
    // Main routine
    let maxPhi = 0
    let tMax = 0
    for(let i = 2; i < limit; i++) {
        let phi = 1, mPhi  = 1
        if(isPrime(i)) {
            continue
        } else {
            for(let j = 2; j < i; j++) {
                if(!(i % j)) continue
                let mGcd = gcd(i, j)
                if(mGcd === 1) phi++
            }
        }
        mPhi = i/phi
        if(maxPhi < mPhi){
            maxPhi = mPhi
            tMax = i
        }
    }
return  tMax
}

console.time("Totient")
console.log(totientMaximum(10000));
console.timeEnd("Totient")