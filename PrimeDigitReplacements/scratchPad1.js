function primeDigitReplacements(num) {
    const LIMIT = 999999;

    // Sieve of Eratosthenes
    let sieve = new Uint8Array(LIMIT + 1);
    sieve.fill(1);
    sieve[0] = sieve[1] = 0;
    for (let i = 2; i * i <= LIMIT; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= LIMIT; j += i) sieve[j] = 0;
        }
    }

    // Helper to get primes
    let primes = [];
    for (let i = 11; i <= LIMIT; i++) if (sieve[i]) primes.push(i);

    // Iterate over primes
    let seenPatterns = new Set();
    for (let p of primes) {
        let str = String(p);
        let len = str.length;

        // Try all non-empty masks
        for (let mask = 1; mask < (1 << len); mask++) {
            // Skip masks that replace all digits
            if (mask === (1 << len) - 1) continue;

            // Get pattern
            let chars = str.split('');
            for (let i = 0; i < len; i++) {
                if (mask & (1 << i)) chars[i] = '*';
            }
            let pattern = chars.join('');

            if (seenPatterns.has(pattern)) continue;
            seenPatterns.add(pattern);

            // Determine replacement digits
            let digits = (pattern[0] === '*') ? [1,2,3,4,5,6,7,8,9] : [0,1,2,3,4,5,6,7,8,9];
 
            let count = 0;
            let firstPrime = null;
            for (let d of digits) {
                let candidate = Number(pattern.replace(/\*/g, d));
                //console.log("Candidate: ", candidate)
                if (sieve[candidate]) {
                    count++;
                    if (firstPrime === null) firstPrime = candidate;
                }
            }
            if (count >= num) return firstPrime;
        }
    }
    return 0;
}

console.time("PDR");
console.log(primeDigitReplacements(8)); // 121313
console.timeEnd("PDR");
