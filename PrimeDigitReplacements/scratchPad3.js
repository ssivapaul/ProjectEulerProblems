function primeDigitReplacements(num) {
    const LIMIT = 999999;

    // Build sieve once
    let sieve = new Uint8Array(LIMIT + 1);
    sieve.fill(1);
    sieve[0] = sieve[1] = 0;
    for (let i = 2; i * i <= LIMIT; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= LIMIT; j += i) sieve[j] = 0;
        }
    }

    // Gather primes
    let primes = [];
    for (let i = 11; i <= LIMIT; i++) if (sieve[i]) primes.push(i);

    // Store processed patterns
    let seenPatterns = new Set();

    for (let p of primes) {
        let str = String(p);
        let len = str.length;

        // Try all non-empty masks except "all digits"
        for (let mask = 1; mask < (1 << len) - 1; mask++) {
            // Find positions of the mask
            let firstPos = -1;
            let digitToMatch = null;
            let valid = true;

            for (let i = 0; i < len; i++) {
                if (mask & (1 << i)) {
                    if (digitToMatch === null) digitToMatch = str[i];
                    else if (str[i] !== digitToMatch) {
                        valid = false; // Mask selects different digits → skip
                        break;
                    }
                }
            }
            if (!valid) continue;

            // Create pattern
            let chars = str.split('');
            for (let i = 0; i < len; i++) {
                if (mask & (1 << i)) chars[i] = '*';
            }
            let pattern = chars.join('');

            // Avoid duplicate pattern work
            if (seenPatterns.has(pattern)) continue;
            seenPatterns.add(pattern);

            // Digits to replace with
            let digits = (pattern[0] === '*') ? [1,2,3,4,5,6,7,8,9] : [0,1,2,3,4,5,6,7,8,9];

            // Count primes
            let count = 0;
            let firstPrime = null;
            for (let d of digits) {
                let candidate = Number(pattern.replace(/\*/g, d));
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

console.time("PDR-opt");
console.log(primeDigitReplacements(8)); // 121313
console.timeEnd("PDR-opt");
