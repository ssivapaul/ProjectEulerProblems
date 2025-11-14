

import Decimal from 'decimal.js';

let sqrtDecimal = (n) => {
    Decimal.set({ precision: 100 }); // Set precision to 50 significant digits
    const squareRoot = new Decimal(n).sqrt();
    console.log(squareRoot.toString().length); // Output: 1.4142135623730950488016887242096980785696718753769
    let dIndex = String(squareRoot).indexOf('.')
    let sR = String(squareRoot).slice(dIndex + 1)
    console.log(sR.length)
    let sum = 0
    for(let s of sR.split('')) {    
        sum += Number(s)
   
    }
    return sum
}
console.log(sqrtDecimal(50)); // Get the string representation of the result