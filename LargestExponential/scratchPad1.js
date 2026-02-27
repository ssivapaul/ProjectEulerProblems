
/*
function largestExponential(baseExp) {
    let maxPair =[]
    for(let [b, e] of baseExp) {
        let lgB = Math.log10(b)
        let lgBE = lgB*e
        maxPair.push([lgBE, [b, e]])
        }
        maxPair.sort((a, b) => b[0] - a[0])
        console.log(maxPair)
    return maxPair[0][1] // 
}

// Only change code above this line

function largestExponential(baseExp) {
    let maxVal = -Infinity;
    let maxPair = [];

    for (let [b, e] of baseExp) {
        let val = e * Math.log(b);   // <-- change here
        if (val > maxVal) {
            maxVal = val;
            maxPair = [b, e];
        }
    }
    return maxPair;
}
*/
/*
function largestExponential(baseExp) {
    let best = baseExp[0];
    let max = best[1] * Math.log(best[0]);

    for (let i = 1; i < baseExp.length; i++) {
        let [b, e] = baseExp[i];
        let val = e * Math.log(b);

        if (val > max) {
            max = val;
            best = [b, e];
        }
    }
    return best;
}
*/

function largestExponential(baseExp) {
    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }
    let n = baseExp.length
    for(let i = 0; i < n; i++) {
        let [b1, e1] = baseExp[i]
        for(let j = 0; j < n; j++) {
            let [b2, e2] = baseExp[j]
            if (e1 <= getBaseLog(b1, b2)*e2)  break
            else {
                if(j == n - 2) return baseExp[i]
            }
        }
    }
    return 0
}

let testArray1 = [
  [30125,670983],[895603,504906],[450785,531539],[840237,507276],[380711,538522],[63577,625673],[76801,615157],[502694,527123], [492798,527927]
];

console.log(largestExponential(testArray1));

/*
Problem 99: Largest exponential
Comparing two numbers written in index form like  2**11 and  3**7
is not difficult, as any calculator would confirm that  211=2048<37=2187.

However, confirming that  632382^518061<519432^525806
would be much more difficult, as both numbers contain over three million digits.

Using the 2D baseExp array of base/exponent pairs, determine pair with the greatest numerical value and return it.

Tests
Waiting:1. largestExponential(testArray1) should return an array.
Waiting:2. largestExponential(testArray1) should return [840237, 507276].
Waiting:3. largestExponential(testArray2) should return [895447, 504922].
*/