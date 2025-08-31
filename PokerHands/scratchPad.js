function pokerHands(arr) {
  const vo = '23456789TJQKA';
  const vi = {2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7, 9: 8, T: 9, J: 10, Q: 11, K: 12, A: 13};

  // group values in hand
  let group = (pH) => {
    let v = {2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,T:0,J:0,Q:0,K:0,A:0};
    for (let k of pH) v[k] = (v[k]||0) + 1;
    let vF = Object.entries(v).filter(([k,val]) => val>0);
    let F = Object.fromEntries(vF);
    Object.keys(F).forEach(k => F[k] = [F[k], vi[k]]);
    return F;
  };

  // group suits
  let grp = (su) => {
    let st = {'C':0,'D':0,'S':0,'H':0};
    for (let s of su) st[s] = (st[s]||0)+1;
    let vF = Object.entries(st).filter(([k,val]) => val>0);
    return Object.fromEntries(vF);
  };

  // Hand evaluators

  let isRoyalFlush = (k,s) => {
    let kK = Object.keys(k);
    if (kK.join('')==='TJQKA' && Object.keys(s).length===1) {
      return {pRank:10,kickers:[]};
    }
    return {pRank:0,kickers:[]};
  };

  let isStraightFlush = (k,s) => {
    let kK = Object.keys(k);
    let kV = Object.values(k);
    if (kK.length===5 && Object.keys(s).length===1) {
      if (vo.includes(kK.join(''))) {
        return {pRank:9,kickers:[Math.max(...kV.map(x=>x[1]))]};
      }
    }
    return {pRank:0,kickers:[]};
  };

  let isFourOfAKind = (k) => {
    let vK = Object.values(k);
    if (vK.length===2) {
      let four = vK.find(x=>x[0]===4);
      if (four) {
        let kicker = vK.find(x=>x[0]===1);
        return {pRank:8,kickers:[four[1], kicker[1]]};
      }
    }
    return {pRank:0,kickers:[]};
  };

  let isFullHouse = (k) => {
    let vK = Object.values(k);
    if (vK.length===2) {
      let three = vK.find(x=>x[0]===3);
      let two   = vK.find(x=>x[0]===2);
      if (three && two) {
        return {pRank:7,kickers:[three[1],two[1]]};
      }
    }
    return {pRank:0,kickers:[]};
  };

  let isFlush = (k,s) => {
    if (Object.keys(s).length===1) {
      let vals = Object.values(k).map(x=>x[1]).sort((a,b)=>b-a);
      return {pRank:6,kickers:vals};
    }
    return {pRank:0,kickers:[]};
  };

  let isStraight = (k) => {
    let kK = Object.keys(k);
    let kV = Object.values(k);
    if (kK.length===5) {
      let joined = kK.join('');
      if (vo.includes(joined)) {
        return {pRank:5,kickers:[Math.max(...kV.map(x=>x[1]))]};
      }
      // Ace-low straight (A2345)
      if (joined==='A2345') {
        return {pRank:5,kickers:[5]};
      }
    }
    return {pRank:0,kickers:[]};
  };

  let isThreeOfAKind = (k) => {
    let vK = Object.values(k);
    let three = vK.find(x=>x[0]===3);
    if (three) {
      let kickers = vK.filter(x=>x[0]===1).map(x=>x[1]).sort((a,b)=>b-a);
      return {pRank:4,kickers:[three[1],...kickers]};
    }
    return {pRank:0,kickers:[]};
  };

  let isTwoPairs = (k) => {
    let vK = Object.values(k);
    let pairs = vK.filter(x=>x[0]===2);
    if (pairs.length===2) {
      let kicker = vK.find(x=>x[0]===1);
      let pairVals = pairs.map(x=>x[1]).sort((a,b)=>b-a);
      return {pRank:3,kickers:[...pairVals,kicker[1]]};
    }
    return {pRank:0,kickers:[]};
  };

  let isOnePair = (k) => {
    let vK = Object.values(k);
    let pair = vK.find(x=>x[0]===2);
    if (pair) {
      let kickers = vK.filter(x=>x[0]===1).map(x=>x[1]).sort((a,b)=>b-a);
      return {pRank:2,kickers:[pair[1],...kickers]};
    }
    return {pRank:0,kickers:[]};
  };

  let isHighCard = (k) => {
    let vals = Object.values(k).map(x=>x[1]).sort((a,b)=>b-a);
    return {pRank:1,kickers:vals};
  };

  let getDetail = (k,s) => {
    return isRoyalFlush(k,s).pRank ? isRoyalFlush(k,s)
      : isStraightFlush(k,s).pRank ? isStraightFlush(k,s)
      : isFourOfAKind(k).pRank ? isFourOfAKind(k)
      : isFullHouse(k).pRank ? isFullHouse(k)
      : isFlush(k,s).pRank ? isFlush(k,s)
      : isStraight(k).pRank ? isStraight(k)
      : isThreeOfAKind(k).pRank ? isThreeOfAKind(k)
      : isTwoPairs(k).pRank ? isTwoPairs(k)
      : isOnePair(k).pRank ? isOnePair(k)
      : isHighCard(k);
  };

  // Main loop
  let winP1 = 0;
  for (let n=0; n<arr.length; n++) {
    let p1Kind='',p2Kind='',p1Suit='',p2Suit='';
    let hand = arr[n];
    let i=0;
    while (i<=13) {
      p1Kind += hand[i];
      p1Suit += hand[i+1];
      p2Kind += hand[i+15];
      p2Suit += hand[i+16];
      i+=3;
    }
    let p1K = group(p1Kind);
    let p2K = group(p2Kind);
    let p1S = grp(p1Suit);
    let p2S = grp(p2Suit);
    let P1 = getDetail(p1K,p1S);
    let P2 = getDetail(p2K,p2S);

    if (P1.pRank > P2.pRank) {
      winP1++;
    } else if (P1.pRank===P2.pRank) {
      for (let j=0;j<P1.kickers.length;j++) {
        if (P1.kickers[j] > P2.kickers[j]) { winP1++; break; }
        if (P1.kickers[j] < P2.kickers[j]) { break; }
      }
    }
  }
  return winP1;
}

// Test
const testArr = [
  '8C TS KC 9H 4S 7D 2S 5D 3S AC',
  '5C AD 5D AC 9C 7C 5H 8D TD KS',
  '3H 7H 6S KC JS QH TD JC 2D 8S',
  'TH 8H 5C QS TC 9H 4D JC KS JS',
  '7C 5H KC QH JD AS KH 4C AD 4S'
];

console.log(pokerHands(testArr)); // should print 2
