
let romanNumerals = (roman) => {
    let lkUpR2N = {  "M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1 }
    let lkUpN2R  = {  1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 
                    20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 
                    100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 
                    1000: "M" }
    //Converting Roman numerals into decimal numbers
    let R2N = (r) => {
        let revR = r.split('').reverse(r)
        let num = 0, lastR = revR[0]
        for(let r of revR) {
            num = (lastR > lkUpR2N[r]) ? num - lkUpR2N[r] : num + lkUpR2N[r]
            lastR = lkUpR2N[r]
        }
        return num
    }
    // Converting Decimal number into compact roman numeral
    let N2R = (n) => {
        let roman = ""
        let dPos = 1
        while(n > 0) {
            let d = (n % 10)*dPos
            n = Math.floor(n/10)
            if(d != 0) {
                roman = (d > 1000) ? "M".repeat(d/1000) + roman : lkUpN2R[d] + roman
            } 
            dPos *= 10
        }
        return roman
    }
    // Counting characters.
    let countChr = (str) => {
        let len = 0
        for( let s of str) len += s.length
        return len
    }

    let saved = 0
    for(let r of roman) saved += countChr(r) - countChr(N2R(R2N(r)))
    return saved
}

const tst = ['XIIIIII', 'XVI', 'MMMCCLXVIIII', 'XXXXVI', 'MMMMXX', 'CCLI', 'CCCCXX', 'MMMMDCXXXXI', 'DCCCCIIII', 'MXVIIII'];

console.time("RomanNumerals")
console.log(romanNumerals(tst))
console.timeEnd("RomanNumerals")