console.time("Amicable")
/*
let arr = [12496, 14288, 15472, 14536, 14264]
//let arr = [220, 284]
arr.forEach(a => {
    let sum = []
    for(let i = 1; true; i++) {
        if (a%i == 0) {
            if(sum.includes(i)) break
            else {
                sum.push(i)
                if(a/i !== a) sum.push(a/i)
            }
        }
    }
    let cSum = sum.reduce((acc, cur) => acc + cur, 0);
    console.log(cSum)
})

let limit = 10
const sumDiv = new Array(limit + 1).fill(0);
for (let i = 1; i <= limit / 2; i++) {
    for (let j = i * 2; j <= limit; j += i) {
        sumDiv[j] += i;
        console.log(sumDiv[j], "i", i, "j", j)
    }
}
console.log(sumDiv)
*/

let v = new Map()
v.set(1, true)
console.log(v.get(1))
console.log(v.get(2))
console.timeEnd("Amicable")
//12496→14288→15472→14536→14264(→12496→⋯)