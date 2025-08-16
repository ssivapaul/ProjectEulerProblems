
function permutedMultiples(n) {
    // Build digit frequency array
    const digitCount = (num) => {
        const count = Array(10).fill(0);
        while (num > 0) {
            count[num % 10]++;
            num = Math.floor(num / 10);
        }
        return count.join(','); // turn into string key for quick comparison
    };

    let i = 1;
    while (true) {
        const base = digitCount(i);

        let valid = true;
        for (let j = 2; j <= n; j++) {
            if (digitCount(i * j) !== base) {
                valid = false;
                break;
            }
        }
        if (valid) return i;
        i++;
    }
}

console.time("PermuterdMultiples")
console.log(permutedMultiples(6)); // 142857
console.timeEnd("PermuterdMultiples")