let isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//----------------------------------------------
let Primes = (p) => {
    let primes = [];
    let seive = new Array(p+1).fill(true);
    seive[0] = seive[1] = false;
    let i = 2
    while (i * i <= p) {
        if (seive[i]) {
            for (let j = i * i; j <= p; j += i) seive[j] = false;
        }
        i++
    }
    for (let i = 99; i <= p; i++) if (seive[i]) primes.push(i);
    return primes
}
//---------------------------------------------------------------

let getPrimeAtIndex = (index) => {
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



console.time("scratchPad2")
console.log(JSON.stringify(Primes(1000000), null, 2));
//console.log(Primes(1000))
console.timeEnd("scratchPad2")