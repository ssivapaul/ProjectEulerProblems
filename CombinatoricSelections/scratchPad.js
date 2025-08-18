
let combinatoricSelections = (n) => { 
    let count = 0
    for( let m = 1; m <= 100; m ++) {
        let c = 1
        let r = 0
        while (c < n && r < m/2 + 1) {
            c = c*(m - r)/(r + 1) 
            r++
        }
        if(c > n) count += m + 1  - 2*r
    }
    return count
}

console.time("Combinatoric")
console.log(combinatoricSelections(1000)) //should return 4626
console.log(combinatoricSelections(10000)) //should return 4431.
console.log(combinatoricSelections(100000)) //should return 4255.
console.log(combinatoricSelections(1000000)) //should return 4075.
console.timeEnd("Combinatoric")

//console.log(combinatoricSelections(1000)) //should return a number.
//console.log(combinatoricSelections(1000)) //should return 4626.
//console.log(combinatoricSelections(10000)) //should return 4431.
//console.log(combinatoricSelections(100000)) //should return 4255.
//console.log(combinatoricSelections(1000000)) //should return 4075.
