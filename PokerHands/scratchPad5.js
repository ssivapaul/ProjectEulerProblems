// ---------------- Poker Hands ----------------
function pokerHands(arr) {
  let vo = '23456789TJQKA';

  let group = (pH) => {
    let v = {2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,T:0,J:0,Q:0,K:0,A:0};
    let vi = {2:1,3:2,4:3,5:4,6:5,7:6,8:7,9:8,T:9,J:10,Q:11,K:12,A:13};
    for (let ch of pH) v[ch] = (v[ch] || 0) + 1;
    let vF = Object.entries(v).filter(([k, val]) => val !== 0);
    let F = Object.fromEntries(vF);
    Object.keys(F).forEach(k => F[k] = [F[k], vi[k]]);
    return F;
  }

  let grp = (su) => {
    let st = {'C':0,'D':0,'S':0,'H':0};
    for (let s of su) st[s] = (st[s] || 0) + 1;
    let vF = Object.entries(st).filter(([k, val]) => val !== 0);
    return Object.fromEntries(vF);
  }

  // ---- ranking evaluators ----
  let isRoyalFlush = (k, s) => {
    let kK = Object.keys(k).join('');
    if (kK === 'TJQKA' && Object.values(s).length === 1) return [10, []];
    return [0, []];
  }

  let isStraightFlush = (k, s) => {
    let kK = Object.keys(k).join('');
    let kV = Object.values(k);
    if (kK.length === 5 && Object.values(s).length === 1 && vo.includes(kK)) {
      return [9, [kV[4][1]]];
    }
    return [0, []];
  }

  let isFourKind = (k) => {
    let v = Object.values(k);
    let four = v.find(x => x[0] === 4);
    if (four) {
      let kicker = v.find(x => x[0] === 1);
      return [8, [four[1], kicker[1]]];
    }
    return [0, []];
  }

  let isFullHouse = (k) => {
    let v = Object.values(k);
    let three = v.find(x => x[0] === 3);
    let two = v.find(x => x[0] === 2);
    if (three && two) return [7, [three[1], two[1]]];
    return [0, []];
  }

  let isFlush = (s, k) => {
    if (Object.values(s).length === 1) {
      let v = Object.values(k).map(x => x[1]).sort((a,b) => b-a);
      return [6, v];
    }
    return [0, []];
  }

  let isStraight = (k) => {
    let kK = Object.keys(k).join('');
    let v = Object.values(k);
    if (kK.length === 5 && vo.includes(kK)) return [5, [v[4][1]]];
    return [0, []];
  }

  let isThreeKind = (k) => {
    let v = Object.values(k);
    let three = v.find(x => x[0] === 3);
    if (three) {
      let rest = v.filter(x => x[0] !== 3).map(x => x[1]).sort((a,b)=>b-a);
      return [4, [three[1], ...rest]];
    }
    return [0, []];
  }

  let isTwoPairs = (k) => {
    let v = Object.values(k);
    let pairs = v.filter(x => x[0] === 2);
    if (pairs.length === 2) {
      pairs.sort((a,b)=>b[1]-a[1]);
      let kicker = v.find(x => x[0] === 1);
      return [3, [pairs[0][1], pairs[1][1], kicker[1]]];
    }
    return [0, []];
  }

  let isOnePair = (k) => {
    let v = Object.values(k);
    let pair = v.find(x => x[0] === 2);
    if (pair) {
      let rest = v.filter(x => x[0] !== 2).map(x => x[1]).sort((a,b)=>b-a);
      return [2, [pair[1], ...rest]];
    }
    return [0, []];
  }

  let isHighCard = (k) => {
    let v = Object.values(k).map(x => x[1]).sort((a,b)=>b-a);
    return [1, v];
  }

  let getDetail = (k, s) => {
    return isRoyalFlush(k,s)[0] ? isRoyalFlush(k,s)
      : isStraightFlush(k,s)[0] ? isStraightFlush(k,s)
      : isFourKind(k)[0] ? isFourKind(k)
      : isFullHouse(k)[0] ? isFullHouse(k)
      : isFlush(s,k)[0] ? isFlush(s,k)
      : isStraight(k)[0] ? isStraight(k)
      : isThreeKind(k)[0] ? isThreeKind(k)
      : isTwoPairs(k)[0] ? isTwoPairs(k)
      : isOnePair(k)[0] ? isOnePair(k)
      : isHighCard(k);
  }

  // ---- comparison loop ----
  let winP1 = 0;
  for (let n = 0; n < arr.length; n++) {
    let line = arr[n].split(" ");
    let p1Kind = '', p2Kind = '', p1Suit = '', p2Suit = '';
    for (let i = 0; i < 5; i++) {
      p1Kind += line[i][0];
      p1Suit += line[i][1];
      p2Kind += line[i+5][0];
      p2Suit += line[i+5][1];
    }
    let p1K = group(p1Kind), p2K = group(p2Kind);
    let p1S = grp(p1Suit), p2S = grp(p2Suit);
    let P1 = getDetail(p1K, p1S);
    let P2 = getDetail(p2K, p2S);

    if (P1[0] > P2[0]) winP1++;
    else if (P1[0] === P2[0]) {
      for (let j = 0; j < P1[1].length; j++) {
        if (P1[1][j] > P2[1][j]) { winP1++; break; }
        if (P1[1][j] < P2[1][j]) { break; }
      }
    }
  }
  return winP1;
}

// ---------------- Inline poker.txt dataset ----------------
const rawData = `
8C TS KC 9H 4S 7D 2S 5D 3S AC
5C AD 5D AC 9C 7C 5H 8D TD KS
... (snip: full 1000 lines go here) ...
`; 

// split into array of lines
const handsArr = rawData.trim().split("\n");

// run the solver
console.log(pokerHands(handsArr)); // should print 376
