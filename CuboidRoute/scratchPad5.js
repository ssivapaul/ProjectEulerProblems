

function cuboidRoute(n) {
    let M = 2000 // Set an arbitary limit for M
    let cuboid = new Array(M+1).fill(0) // Array for storing cumulative triple counts

    // Object for pairing z with all possible legs(xy) of triples
    let z_xy = {}

    // Helper function to count pair of (x, y) which satisfies condition 1 <= x <= y <= z
    let calc = (xy, z) => { 
        if(xy > z) return (z - Math.floor((xy - 1)/2))
        else return Math.floor(xy/2)
    }

    // Routine to generate (z, xy) pairs. And sor it in Object z_xy.
    for(let m = 2; m < M; m++) {
        //for(let n = 1; n < Math.min(m, Math.floor(M/m)+1); n++) {
        for(let n = 1; n < m; n++) {
            if(m**2 - n**2 > 2*M || 2*m*n > 2*M) break
            for ([xy, z] of [[m**2 - n**2, 2*m*n], [2*m*n, m**2 - n**2]]) {
                if(xy <= 2*z) { // necessary condition to meet 1 <= x <= y <= z.
                    for(let i = 1; i < (Math.floor(M/z) + 1); i++) { // Limit i so taht z*i will not exceed M.
                        if(z_xy[z*i])  z_xy[z*i].add(xy*i) // if z*i exist, add xy*i to set.
                        else z_xy[z*i] = new Set([xy*i]) // Otherwise create net set with item (xy*i)
                    }
                }
            }
        } 
    }
    //console.log(z_xy)
    let cumSum = 0 // Cumulative sum of triplets at z.
    for(let [z, xy] of Object.entries(z_xy)) {
        for(let ixy of xy) cumSum += calc(ixy, Number(z))
        cuboid[z] = cumSum
    }
    //}
    
    for(let i = 0; i < cuboid.length; i++) if(cuboid[i] > n) return i
     
    return 0

} 
console.time("Cuboid")

console.log(cuboidRoute(2000)) //should return 100.
console.log(cuboidRoute(25000)) //should return 320.
console.log(cuboidRoute(500000)) //should return 1309.
console.log(cuboidRoute(1000000)) //should return 1818.

console.timeEnd("Cuboid")

/*
Tests
Waiting:1. cuboidRoute(2000) should return a number.
Waiting:2. cuboidRoute(2000) should return 100.
Waiting:3. cuboidRoute(25000) should return 320.
Waiting:4. cuboidRoute(500000) should return 1309.
Waiting:5. cuboidRoute(1000000) should return 1818.
*/