


let Max = 0
let ijk = []
let C = []
let max = 50
//for(let max = 100; max <= 100; max++) {
    let count = 0
    for(let i = 1; i <= max; i++) {
        for(let j = i; j <= max; j++) {
            for(let k = j; k <= max; k++) {
                let d = Math.sqrt((i + j)**2 + k**2)
                if(Math.floor(d) === d) {
                    count++
                    console.log([i, j, [i+j], k, d, count])
                    ijk.push([i, j, [i+j], k, d, count])
                }
            }
        }
    }

//}
console.time("Cuboid")
ijk.sort((a, b) => a[2] - b[2])
//console.log(ijk.slice(-100), count)
console.log(ijk, count)
console.timeEnd("Cuboid")

/*
Tests
Waiting:1. cuboidRoute(2000) should return a number.
Waiting:2. cuboidRoute(2000) should return 100.
Waiting:3. cuboidRoute(25000) should return 320.
Waiting:4. cuboidRoute(500000) should return 1309.
Waiting:5. cuboidRoute(1000000) should return 1818.
*/