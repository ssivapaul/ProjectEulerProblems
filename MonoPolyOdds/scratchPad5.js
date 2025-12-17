//const { RM } = require("big.js")


let markovChainSolver = (d) => {
    let ns = ["GO", "A1", "CC1", "A2", "T1", "R1", "B1", "CH1", "B2", "B3", "JAIL",
             "C1", "U1", "C2", "C3", "R2", "D1", "CC2", "D2", "D3", "FP", "E1",
             "CH2", "E2", "E3", "R3", "F1", "F2", "U2", "F3", "G2J", "G1", "G2",
             "CC3", "G3", "R4", "CH3", "H1", "T2", "H2"]

    let ss = {}
    for(let [i, n] of ns.entries()) ss[n] = i   
    // Helper function, Find next 'R', 'U'
    let findNext = (cS, pF) => {
        let len = ns.length
        for(let i = 0; i < len; i++) {
            let nxt = (cS + i) % len
            if(ns[nxt][0] == pF) return nxt 
        }
        return cS
    }
    //----------------------------
    let nextR = Object.values(ss).map(i => findNext(i, 'R'))
    let nextU = Object.values(ss).map(i => findNext(i, 'U'))

    // Helper function, resolve final positions and pobability associated
    let resolve = (ts, p) => {
        let P = Array(ns.length).fill(0)
        let s = ns[ts]
        if(s == 'G2J') P[ss['JAIL']] += p
        else if (s.slice(0, 2) == 'CC') {
            P[ss['GO']] += p/16
            P[ss['JAIL']] += p/16
            P[ts] += 14*p/16 // Probability of staying on 'CC' state.
        }
        else if (s.slice(0, 2) == 'CH') {
            let b3 = (ts - 3)%ns.length  // Backward 3 steps dealt separatly
            if(ns[b3].slice(0, 2) == 'CH' || ns[b3].slice(0, 2) == 'CC') resolve(b3, p/16) 
            // Create array of remainig possible states
            let moves = [ss['GO'] , ss['JAIL'], ss['C1'], ss['E3'], ss['H2'] , ss['R1'], nextR[ts], nextR[ts], nextU[ts]]
            for(let m of moves) P[m] += p/16 // Apply probability to remaining possible states
            P[ts] += 6*p/16 // Probability of staying on 'CH' state
        } 
        else P[ts] += p // Any states other than 'G2J', 'CH', 'CC'
        return P.map(p => p/d**2) // 
    }
    // Dice roll outcomes vector, n**2 numbers
    let rolls = []
    for(let a = 1; a <= d; a++) for(let b = 1; b <= d; b++) rolls.push([a, b]) // roll dice 
   
    let pMatrix = Array.from({ length: ns.length }, () => new Array(ns.length).fill(0)); // Initialise Probability Matrix
    for(let cs = 0; cs < ns.length; cs++) { // cs - Current position
        let P = Array(ns.length).fill(0)
        for([a, b] of rolls) { // a dice1 outcome, b dice2 outcome
            let ts = (cs + a + b) % ns.length // ts - New position after dice roll.
            let pMatrixRow = resolve(ts, 1) // Probability row vector for cs--> transition
            for(let nS = 0; nS < ns.length; nS++) pMatrix[cs][nS] += pMatrixRow[nS] // Populate transition matrix            
        }
    }
    // Matrix multiplication
    let matMul = (m1, m2) => {
        let rMatrix = Array.from({ length: ns.length }, () => new Array(ns.length).fill(0));
        for (let i = 0; i < ns.length; i++) {
            for (let j = 0; j < ns.length; j++) {
                for (let k = 0; k < ns.length; k++) rMatrix[i][j] += m1[i][k] * m2[k][j];
            }
        }
        return rMatrix
    }
//------------------------------------------------
    let rMatrix = matMul(pMatrix, pMatrix)
    for(let i = 0; i < 200; i++) rMatrix = matMul(rMatrix, pMatrix)
    
    let pair = []
    for(let i = 0; i < ns.length; i++) pair.push([rMatrix[0][i], ns[i], i])
    let sPair = pair.sort((a, b) => b[0] - a[0]);
    //console.log(sPair.slice(0, 3))
    let result = sPair.map(i => i[2]).slice(0, 3).map(i => i.toString().padStart(2, '0')).join('')
    return result
    
}
console.log(markovChainSolver(8))

// JAIL (6.24%) = Square 10, E3 (3.18%) = Square 24, and GO (3.09%) = Square 00. 
// So these three most popular squares can be listed with the six-digit modal string 102400.
/*
Tests
Waiting:1. monopolyOdds(8) should return a string.
Waiting:2. monopolyOdds(8) should return string 102400.
Waiting:3. monopolyOdds(10) should return string 100024.
Waiting:4. monopolyOdds(20) should return string 100005.
Waiting:5. monopolyOdds(4) should return string 101524.
*/