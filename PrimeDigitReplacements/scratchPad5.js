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

    let seenPatterns = new Set();

    for (let p of primes) {
        let str = String(p);
        let len = str.length;

        // Map digit → positions
        let posMap = {};
        for (let i = 0; i < len; i++) {
            let d = str[i];
            if (!posMap[d]) posMap[d] = [];
            posMap[d].push(i);
        }

        // Only consider digits that appear more than once
        for (let d in posMap) {
            if (posMap[d].length < 1) continue;

            let positions = posMap[d];
            let posCount = positions.length;

            // Generate non-empty subsets of positions
            // Skip subset that includes all digits
            for (let mask = 1; mask < (1 << posCount); mask++) {
                if (mask === (1 << len) - 1) continue; // skip all-digits mask

                // Build pattern
                let chars = str.split('');
                for (let bit = 0; bit < posCount; bit++) {
                    if (mask & (1 << bit)) chars[positions[bit]] = '*';
                }
                let pattern = chars.join('');

                if (seenPatterns.has(pattern)) continue;
                seenPatterns.add(pattern);

                // Digits to try
                let digits = (pattern[0] === '*') ? [1,2,3,4,5,6,7,8,9] : [0,1,2,3,4,5,6,7,8,9];

                let count = 0;
                let firstPrime = null;
                for (let rep of digits) {
                    let candidate = Number(pattern.replace(/\*/g, rep));
                    if (sieve[candidate]) {
                        count++;
                        if (firstPrime === null) firstPrime = candidate;
                    }
                }
                if (count >= num) return firstPrime;
            }
        }
    }
    return 0;
}

console.time("PDR-ultra");
console.log(primeDigitReplacements(8)); // 121313
console.timeEnd("PDR-ultra");
