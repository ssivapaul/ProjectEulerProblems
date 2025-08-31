
//import fs from "fs";   // if using ES modules
// or
const fs = require("fs"); // if using CommonJS


function pokerHands(arr) {
  let vo = '23456789TJQKA'
  
  let group = (pH) => {
    let v = {2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, T: 0, J: 0, Q: 0, K: 0, A: 0}
    let vi = {2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7, 9: 8, T: 9, J: 10, Q: 11, K: 12, A: 13}
    for(let k of pH) v[k] = ((v[k] || 0) + 1)
    let vF = Object.entries(v).filter(([k, v]) => v != 0)
    let F = Object.fromEntries(vF)
    Object.keys(F).forEach(k => F[k] = [F[k], vi[k]])
    return F
  }
  let grp = (su) => {
    let st = {'C': 0, 'D': 0, 'S': 0, 'H': 0}
    for(let s of su) st[s] = ((st[s] || 0) + 1)
    let vF = Object.entries(st).filter(([k, v]) => v != 0)
    let F = Object.fromEntries(vF)
    return F
  }
  // cannot be beaten. Split the pot
  let isRoyalFlush = (k, s) => {
    let kK = Object.keys(k)
    let sV = Object.values(s)
    let m = sV.length
    if(kK.join('') === 'TJQKA' && m == 1) return [10, 0]
    return [0]
  }
  // Higther straight flush wins.
  let isStraightFlush = (k, s) => {
    let kK = Object.keys(k)
    let kV = Object.values(k)
    let sV = Object.values(s)
    let n = kK.length
    let m = sV.length
    if(n == 5 && m == 1) { // No duplicate kinds
        if(vo.includes(kK.join(''))) return [9, kV[1][4]]
    }
    return [0]
  }
  // The higher four-of-a-kind wins. If this is tied, the higher kicker wins.
  let isFourOfSameKind = (k) => {
    let vK = Object.values(k)
    if(vK.length == 2 && (vK[0][0] == 4 || vK[0][0] == 1)) {
      return (vK[0][0] == 4) ? [8, [vK[0][1], vK[1][1]]]
                             : [8, [vK[1][1], vK[0][1]]]
    }
    return [0]
  }
  // The higher three-of-a-kind wins. If these are tied, the higher pair wins.
  let isFullHouse = (k) => {
    let kK = Object.keys(k)
    let kV = Object.values(k)
    if(kK.length == 2 && (kV[0][0] == 3 || kV[0][0] == 2)) {
        return kV[0][0] == 3 ? [7, [kV[0][1], kV[1][1]]]
                             : [7, [kV[1][1], kV[0][1]]] 
    }
    return [0]
  }
  // The flush containing the highest card wins. 
  let isFlush = (k, s) => {
    let kV = Object.values(k)
    let sV = Object.values(s)
    let n = kV.length
    let m = sV.length
    if(n == 5 && m == 1) return [6, [kV[4][1], kV[3][1], kV[2][1], kV[1][1], kV[0][1]]]
    return [0]
  }
  // The highest straight wins.
  let isStraight = (k) => {
    let kK = Object.keys(k)
    let kV = Object.values(k)
    if(kK.length == 5) { // No duplicate kinds
        if(vo.includes(kK.join(''))) return [5, [kV[4][1]]]
    }
    return [0]
  }
  // The highest three-of-a-kind wins. 
  let isThreeOfAKind = (k) => {
    let kV = Object.values(k)
    let n = kV.length
    if(n == 3) {
        if(kV[2][0] == 3) {
            return [4, [kV[2][1], kV[1][1], kV[0][1]]]
        } else if(kV[1][0] == 3){
            return [4, [kV[1][1], kV[2][1], kV[0][1]]]
        } else if(kV[0][0] == 3){
            return [4, [kV[0][1], kV[2][1], kV[1][1]]]           
        }
    }
    return [0]
  }
  // The highest two pair wins. 
  let isTwoPairs = (k) => {
    let kV = Object.values(k)
    let n = kV.length
    if(n == 3) {
        if(kV[2][0] == 2 && kV[1][0] == 2) {
            return [3, [kV[2][1], kV[1][1], kV[0][1]]]
        } else if(kV[2][0] == 2 && kV[0][0] == 2){
            return [3, [kV[2][1], kV[0][1], kV[1][1]]]
        } else {
            return [3, [kV[1][1], kV[0][1], kV[2][1]]]            
        }
    }
    return [0]
  }
  // The higher pair wins. 
  let isOnePair = (k) => {
    let kV = Object.values(k)
    let n = kV.length
    if(n == 4) {
        for(let i = 0; i < n; i++) {
            if(kV[i][0] == 2) {
                let v = kV.filter((_, j) => j !== i)
                return [2, [kV[i][1], v[2][1], v[1][1], v[0][1]]]
            }
        }
    }
    return [0]
  }
  // The highest card wins. 
  let isHighCard = (k) => {
    let kV = Object.values(k)
    let n = kV.length
    if(n == 5) {
      return [1, [kV[4][1], kV[3][1], kV[2][1], kV[1][1], kV[0][1]]]
    }
    return [0]
  }
  let getDetail = (k, s) => {
    return isRoyalFlush(k, s)[0] ? isRoyalFlush(k, s)
      : isStraightFlush(k, s)[0] ? isStraightFlush(k, s)
      : isFourOfSameKind(k)[0] ? isFourOfSameKind(k)
      : isFullHouse(k)[0] ? isFullHouse(k)
      : isFlush(k, s)[0] ? isFlush(k, s)
      : isStraight(k)[0] ? isStraight(k)
      : isThreeOfAKind(k)[0] ? isThreeOfAKind(k)
      : isTwoPairs(k)[0] ? isTwoPairs(k)
      : isOnePair(k)[0] ? isOnePair(k)
      : isHighCard(k)[0] ? isHighCard(k)
      : [0]
  }
  
  // Main routine
  let winP1 = 0
  for(let n = 0; n < arr.length; n++) {
    let p1Kind = ''
    let p2Kind = ''
    let p1Suit = ''
    let p2Suit = ''
    let hand = arr[n]
    let i = 0
    while(i <= 13) {
        p1Kind += hand[i]
        p1Suit += hand[i+1]
        p2Kind += hand[i+15]
        p2Suit += hand[i+16]
        i+=3
    }
    let p1K = group(p1Kind)
    let p2K = group(p2Kind)
    let p1S = grp(p1Suit)
    let p2S = grp(p2Suit)
    let P1 = getDetail(p1K, p1S)
    let P2 = getDetail(p2K, p2S)

    if (P1[0] > P2[0]) {
        winP1++ 
    } else if (P1[0] === P2[0]) {
        let kickers1 = P1[1] || []
        let kickers2 = P2[1] || []
        for (let j = 0; j < kickers1.length; j++) {
            if (kickers1[j] > kickers2[j]) { winP1++; break }
            if (kickers1[j] < kickers2[j]) { break }
        }
    }
  }
  
  return winP1;
}

const testArr = [
  '8C TS KC 9H 4S 7D 2S 5D 3S AC',
  '5C AD 5D AC 9C 7C 5H 8D TD KS',
  '3H 7H 6S KC JS QH TD JC 2D 8S',
  'TH 8H 5C QS TC 9H 4D JC KS JS',
  '7C 5H KC QH JD AS KH 4C AD 4S'
];

//console.log(pokerHands(testArr)) // should print 2

// ---------------- run with poker.txt ----------------
const data = fs.readFileSync('poker.txt', 'utf8').trim().split('\n');
console.time("Poker")
console.log(pokerHands(data)); // should print 376
console.timeEnd("Poker")
