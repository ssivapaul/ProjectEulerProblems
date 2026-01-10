const { DP } = require("big.js")

let lookUpR2N = {  "M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1 }
let lookUpN2R  = {  1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 
                    20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 
                    100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 
                    1000: "M" }

let parseRomanNumber = (r) => {
    let revR = r.split('').reverse(r)
    let num = 0, lastR = revR[0]
    for(let r of revR) {
        if(lastR > lookUpR2N[r]) num -= lookUpR2N[r]
        else num += lookUpR2N[r]
        lastR = lookUpR2N[r]
    }
    return num
}

let ParseNumeralNumber = (n) => {
    let roman = ""
    let dPos = 1
    while(n > 0) {
        let d = n % 10
        d *= dPos
        n = Math.floor(n/10)
        if(d != 0) {
            if(d > 1000) roman = "M".repeat(d/1000) + roman
            else roman = lookUpN2R[d] + roman
        }   
        dPos *= 10
    }
    return roman
}

let countChar = (str) => {
    let len = 0
    for( let s of str) len += s.length
    return len
}

let romanNumerals = (roman) => {
    let total = 0
    for(let r of roman) {
        let numeral = parseRomanNumber(r)
        let rCompact = ParseNumeralNumber(numeral)
        let cntR = countChar(r)
        let cntRCompact = countChar(rCompact)
        total += cntR - cntRCompact
        //console.log(s, cnt1, numN, charR, cnt2)
    }

    return total
}

const tst = [
  'XIIIIII', 'XVI', 'MMMCCLXVIIII', 'XXXXVI', 'MMMMXX', 'CCLI', 'CCCCXX', 'MMMMDCXXXXI', 'DCCCCIIII', 'MXVIIII'
];

console.log(romanNumerals(tst))
//console.log(ParseNumeralNumber(3046))
//console.log(parseRomanNumber('MMMDCIX'))



/*
values = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}

def parse_roman_numeral(numeral: str) -> int:
    value = 0
    last = 0
    for n in reversed(numeral):
        n = values[n]
        if last > n:
            value -= n
        else:
            value += n
        last = n
    return value
    */