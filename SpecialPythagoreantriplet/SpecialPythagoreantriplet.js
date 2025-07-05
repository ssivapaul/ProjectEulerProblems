function specialPythagoreanTriplet(n) {
    //Number.isInteger(Math.sqrt(num));
    let sumOfabc = n
    let a, b;
    let result = []
    for(a = 1; a <= 200; a++) {
        for(b = a+1; b <= 375; b++) {
            let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            if(Number.isInteger(c)) {
                if(a+b+c === sumOfabc) {
                    result.push([a, b, c, a+b+c, a*b*c])
                }
            }
        }
    }
    let product = []
    for(let r of result) {
        product.push(r[4])
    }
return product[0];
}

console.log(specialPythagoreanTriplet(120));