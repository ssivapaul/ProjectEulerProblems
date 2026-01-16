
let RTWC = (n) => {
    let atXaxis = n**2; 
    let atYaxis = n**2; 
    let atOrigin = (n**2)
    let atMidPt = 0
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            for(let x = 0; x <= n; x++) {
                let cord = (i*i +j*j - i*x) % j
                let y = (i*i +j*j - i*x)/j 
                if(y > n || y < 0) continue
                if (cord == 0 && (i != x && j != y)) atMidPt++ 
            }
        }
    }
    return (atMidPt+ atOrigin + atXaxis + atYaxis)
}

console.time("RightTriangle")
console.log(RTWC(2))
console.log(RTWC(10))
console.log(RTWC(25))
console.log(RTWC(50))
console.timeEnd("RightTriangle")

/*
Tests
Waiting:1. rightTrianglesIntCoords(2) should return a number.
Waiting:2. rightTrianglesIntCoords(2) should return 14.
Waiting:3. rightTrianglesIntCoords(10) should return 448.
Waiting:4. rightTrianglesIntCoords(25) should return 3207.
Waiting:5. rightTrianglesIntCoords(50) should return 14234.
*/