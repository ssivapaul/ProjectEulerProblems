

let almostEquilateralTriangles = (limit) => {
    let [X0, Y0] = [4, 2] // Fundamental solution of Pell like equation X**2 - 3*Y**2 = 4
    let Xn = X0, Yn = Y0
    let m = -1 // To alternate sign
    let S = 0 // Cumulative sum of perimeters
    let P = 0 // Perimeter of Almost Equilateral Triangle
    while(P <= limit) {
        let Xn1 = 2*Xn + 3*Yn
        let Yn1 = Xn + 2*Yn
        Xn = Xn1, Yn = Yn1  
        //let a = (Xn - m)/3 
        S += P
        P = Xn - 2*m // Xn = (3*a -/+ 1), a, a, a -/+ 1
        //console.log("a:", a, "Xn:", Xn, "P:", P, "S:", S)
        m *= -1
    }
    return S
}

console.time("Almost")
//console.log(almostEquilateralTriangles(50)) // should return a number.
console.log(almostEquilateralTriangles(50)) //should return 66.
console.log(almostEquilateralTriangles(10000)) //should return 3688.
console.log(almostEquilateralTriangles(10000000)) //should return 9973078.
console.log(almostEquilateralTriangles(1000000000)) //should return 518408346.
console.timeEnd("Almost")
