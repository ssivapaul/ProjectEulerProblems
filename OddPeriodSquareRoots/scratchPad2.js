
/*
let period = (n) => {
        let an = []
        let sqrtn = Math.sqrt(n)
        let floor = Math.floor(sqrtn);
        let a0 = floor
        if(floor == sqrtn) return 0

        while(true) {
            let den = (n - floor**2)
            let a = Math.floor(2*floor/den)
            an.push(a)
            let num = floor - den*a
            floor = num
        }
        return an
}

//console.log(period(23))


        // floating pount drift bug in this algorithm
        /*
        while(true) {
            quo = 1/(quo - mod)  // 1.2565. 3.8979, 1.1137, 8.7958, 1.2565
            mod = Math.floor(quo) //1, 3, 1, 8, 1
            an.push(mod)
            let periodEnd = (quo - mod).toFixed(4)
            if(periodStart == periodEnd) break
        }
        */


    //console.log(period(13))

/*
var a = 48; // First number
var b = 32;  // Second number 
var gcd; 
while (a != b) {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
}
gcd = a;


1/(sqN - f)
(sqN + f)/(n - f**2)
let d = (n - f**2)
a = Math.floor((f + f)/d)
let c = a*d - c
*/

let oddPeriod = (n) => {
    let b = 1, d = 1, an = 1
    let An = []
    let f = Math.floor(Math.sqrt(n))
    if(f == Math.sqrt(n)) return 0
    let c = f

    while(true) {
        d = (n - c**2)/b
        an = Math.floor((f + c)/d)
        An.push(an)
        c = an*d - c
        b = d
        if(b == 1 && c == f) break
    }
    if(An.length % 2 !== 0) return 1
    return 0
}

console.time("Period")
let count = 0
for(let i = 2; i <= 10000; i++) count += oddPeriod(i)
console.log(count)
console.timeEnd("Period")