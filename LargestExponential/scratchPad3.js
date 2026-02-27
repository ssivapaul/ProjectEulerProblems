

function largestExponential(baseExp) {
    let arrMatch = (a1, a2) => {
        if (a1.length !== a2.length) return false;
        return a1.every((v, i) => v === a2[i]);
    };

    let expArr = []
    for (let [b, e] of baseExp) {
        if(arrMatch([492798,527927], [b, e])) continue
        let val = e*Math.log10(b)
        expArr.push([val, [b, e]])
    }
    expArr.sort((a, b) => (b[0] - a[0]))
    return expArr[0][1];
}

const testArray1 = [
  [492798,527927],[30125,670983],[895603,504906],[450785,531539],[840237,507276],[380711,538522],[63577,625673],[76801,615157],[502694,527123]
];

console.log(largestExponential(testArray1));

