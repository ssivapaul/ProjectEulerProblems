


let count = 0
let maxCount = false
let ijk = []
    for( let i = 1; i <= 100; i++) {
        for(let j = i; j <= 100; j++) {
            for(let k = j; k <= 100; k++) {
                let d = Math.sqrt((i + j)**2 + k**2)
                if(Math.floor(d) === d) {
                    count++
                    ijk.push([i, j, k, d, count])
                }
            }
        }
    }


console.time("Cuboid")
console.log(ijk, count)
console.timeEnd("Cuboid")