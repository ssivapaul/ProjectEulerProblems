

let convergentsOfE = (n) => {   
    num = 1, den = 1, temp = 0
    if(n == 1) num = 2
    if(n%3 == 0) num = Math.floor(n/3)*2
    for(let k = n-1; k > 0; k--) {
        temp = den, den = num
        if(k % 3 == 0) num = Math.floor(k/3)*2*num + temp
        if (k == 1) num = 2*num + temp
        if (k % 3 !== 0 && k !== 1) num = num + temp
    }
    console.log("num", BigInt(num))
    
    let sum = 0
    let charNum = String(BigInt(num)).split('')
    for(let s of charNum) sum += Number(s)
    return sum
}

console.time("Convergent")
//console.log(convergentsOfE(10))
//console.log(convergentsOfE(30))
//console.log(convergentsOfE(50))
console.log(convergentsOfE(70))
//console.log(convergentsOfE(100))
console.timeEnd("Convergent")


//The numerator of the 50th convergent of the continued fraction for \(e\) is 
// 7044574971638661611099684178351543883713589431872134267258384218388339233077.
//14414343834241724036662712959828551
//num,den, n 1363322103204314454425600n 501538173463478621175808n 50

