

console.time("DigitalFactorial")
let f = { 0: 1, 1: 1, 2: 2, 3: 6, 4: 24, 5: 120, 6: 720, 7: 5040, 8: 40320, 9: 362880}
let N = 0

for(let i = 1; i < 1000000; i++) {
    let s = String(i)
    let cLst = []
    let n = 0
    while(++n) {
        let j = 0, chain = 0
        while(j < s.length) chain += f[s[j++]]
        if (cLst.includes(chain)) break
        cLst.push(chain)
        s = String(chain)
    }

    if(n >= 60) {
        N++
        //console.log(cLst, cLst.length)
        //console.log(cache)
    }
}
console.log(N)
console.timeEnd("DigitalFactorial")