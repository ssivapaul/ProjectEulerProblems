

    let  bigIntSqrt = (n, precision = 0) => {
        if (n < 0n) throw new Error("Cannot compute square root of negative BigInt.");
        if (n === 0n) return 0n;
        let low = 0n;
        let high = n;
        let result = 0n;
    // Find the integer part using binary search
        while (low <= high) {
            let mid = low + (high - low) / 2n;
            if (mid * mid === n) {
                console.log(low, mid, high)
                return mid;
            } else if (mid * mid < n) {
                result = mid;
                low = mid + 1n;
            } else {
                high = mid - 1n;
            }
        }
        return result;
    }

    console.log(bigIntSqrt(16n))