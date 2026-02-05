
function sumAmicableNum(limit) {

    /*
    let isPrime = (n) => {
        if (n == 2 || n == 3) return true
        if (n <= 1 || n % 2 == 0) return false;
        let sqrt = Math.sqrt(n)
        for (let i = 3 ; i <= sqrt; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let  divSum = (n) => {
        let sum = []
        for(let i = 1; true; i++) {
            if(n == i) return 1
            if (n%i == 0) {
                if(sum.includes(i)) break
                else {
                    sum.push(i)
                    if(n/i !== n) sum.push(n/i)
                }
            }
        }
        let cSum = sum.reduce((acc, cur) => acc + cur, 0);
        return cSum
    }
    */
    let ds = new Array(limit + 1).fill(0);
    for (let i = 1; i <= limit / 2; i++) {
        for (let j = i * 2; j <= limit; j += i) ds[j] += i;
    }

    let mChain = [], maxCL = []
    let mCL = 0
    for (let a = 2; a <= limit; a++) {
        let chain = []
        chain.push(a)
        let b = ds[a]
        if(b < a) continue
        while (!chain.includes(b) && b < limit && b > a) {
            chain.push(b)
            b = ds[b]  
        }
        if(b == a) mChain.push(chain)
    }
    for(mc of mChain) {
        if(mCL < mc.length) {
            mCL = mc.length
            maxCL = mc
        }
    }
    return maxCL[0]
}

console.time("AmicableNumbers")
let c1 = sumAmicableNum(300) // Should return 220
let c2 = sumAmicableNum(15000) // Should return 220
let c3 = sumAmicableNum(100000) // Should return 12496
let c4 = sumAmicableNum(1000000) // Should return 14316
console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
console.timeEnd("AmicableNumbers")

//12496→14288→15472→14536→14264(→12496→⋯)