function pokerHands(arr) {
  let vo = '23456789TJQKA'
  //----------------------------------------------------
  let group = (pH) => {
    let v = {2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, T: 0, J: 0, Q: 0, K: 0, A: 0}
    let vi = {2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7, 9: 8, T: 9, J: 10, Q: 11, K: 12, A: 13}
    for (let k of pH) v[k] = ((v[k] || 0) + 1)
    let vF = Object.entries(v).filter(([k, v]) => v != 0)
    let F = Object.fromEntries(vF)
    Object.keys(F).forEach(k => F[k] = [F[k], vi[k]])
    return F
  }
  let grp = (su) => {
    let st = {'C': 0, 'D': 0, 'S': 0, 'H': 0}
    for (let s of su) st[s] = ((st[s] || 0) + 1)
    let vF = Object.entries(st).filter(([k, v]) => v != 0)
    let F = Object.fromEntries(vF)
    return F
  }

  // Example: return { pRank: 10, kickers: [...] }
  let isRoyalFlush = (k, s) => {
    let kK = Object.keys(k)
    let sV = Object.values(s)
    if (kK.join('') === 'TJQKA' && sV.length === 1) return { pRank: 10, kickers: [] }
    return { pRank: 0, kickers: [] }
  }

  let isStraightFlush = (k, s) => {
    let kK = Object.keys(k)
    let kV = Object.values(k)
    if (kK.length == 5 && Object.values(s).length == 1) {
      if (vo.includes(kK.join(''))) return { pRank: 9, kickers: [kV[0][1]] }
    }
    return { pRank: 0, kickers: [] }
  }

  // ... (apply same scheme to all helpers: always return {pRank, kickers: [...]})

  // Highest card
  let isHighCard = (k) => {
    let kV = Object.values(k)
    if (kV.length == 5) {
      return { pRank: 1, kickers: [kV[4][1], kV[3][1], kV[2][1], kV[1][1], kV[0][1]] }
    }
    return { pRank: 0, kickers: [] }
  }

  let getDetail = (k, s) => {
    return isRoyalFlush(k, s).pRank ? isRoyalFlush(k, s)
      : isStraightFlush(k, s).pRank ? isStraightFlush(k, s)
      // ... chain all others in same format
      : isHighCard(k)
  }

  let winP1 = 0
  for (let n = 0; n < arr.length; n++) {
    let p1Kind = ''
    let p2Kind = ''
    let p1Suit = ''
    let p2Suit = ''
    let hand = arr[n]
    let i = 0
    while (i <= 13) {
      p1Kind += hand[i]
      p1Suit += hand[i+1]
      p2Kind += hand[i+15]
      p2Suit += hand[i+16]
      i += 3
    }
    let p1K = group(p1Kind)
    let p2K = group(p2Kind)
    let p1S = grp(p1Suit)
    let p2S = grp(p2Suit)
    let P1 = getDetail(p1K, p1S)
    let P2 = getDetail(p2K, p2S)

    if (P1.pRank > P2.pRank) {
      winP1++ 
    } else if (P1.pRank === P2.pRank) {
      for (let j = 0; j < P1.kickers.length; j++) {
        if (P1.kickers[j] > P2.kickers[j]) { winP1++; break }
        if (P1.kickers[j] < P2.kickers[j]) { break }
      }
    }
  }
  return winP1
}

const testArr = [
  '8C TS KC 9H 4S 7D 2S 5D 3S AC',
  '5C AD 5D AC 9C 7C 5H 8D TD KS',
  '3H 7H 6S KC JS QH TD JC 2D 8S',
  'TH 8H 5C QS TC 9H 4D JC KS JS',
  '7C 5H KC QH JD AS KH 4C AD 4S'
]

console.log(pokerHands(testArr)) // should print 2
