function largeSum(arr) {
    let sum = 0n;
    for(let a of arr) {
        sum +=  BigInt(a);
    }
    sum = sum.toString()
    sum = sum.slice(0, 10)
    return Number(sum);
}

let a = [
    '12',
    '32',
]

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums))
