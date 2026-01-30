
let almostEquilateralTriangles = (limit) => {
    let [s0, s1, s, p, m] = [1, 1, 0, 0, 1]
    while(p < limit) {
        [s0, s1, m] = [s1, (4 * s1 - s0 + 2 * m), -m]
        s += p
        p = 3*s1 - m
    }
    return s
}

console.time("Almost")
console.log(almostEquilateralTriangles(50)) // should return a number.
console.log(almostEquilateralTriangles(50)) // should return 66.
console.log(almostEquilateralTriangles(10000)) // should return 3688.
console.log(almostEquilateralTriangles(10000000)) // should return 9973078.
console.log(almostEquilateralTriangles(1000000000)) // should return 518408346.
console.timeEnd("Almost")