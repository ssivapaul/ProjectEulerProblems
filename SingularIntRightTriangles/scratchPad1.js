
function singularIntRightTriangles(n) {
    let c = 0, count = 0

    for(let l = 12; l <= n; l++){
        for(let a = 1; a < l; a++) {
            for(let b = a; b < l; b++) {
                c = l - a - b
                if(a*a + b*b == c*c) {
                    console.log(a, b, c)
                    count++
                    break
                }
            }
            console.log("b----->", a)
        }
        console.log("l----->", l)
    }
    return count;
}

console.time("SIRT")
console.log(singularIntRightTriangles(100))
console.timeEnd("SIRT")