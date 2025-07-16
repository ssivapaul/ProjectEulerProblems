function sumOfNonAbundantNumbers(n) {
    let abundantNumbers = (n) => {
    let divSum = {}
    while (n > 1){
        let divSet = new Set()
        let sqrN = Math.floor(Math.sqrt(n))
        
        for( let i = 1; i <= sqrN; i++) {
            if (n%i == 0) {
                divSet.add(i)
                if(n != n/i) divSet.add(n/i)
            }
        }
        
        let divLst = [...divSet].sort((a, b) => a - b)
        let sum = divLst.reduce((a, c) => a + c)
        if(sum > n) divSum[n] = sum
        n--
    }
    return divSum;
    }
//---------------------------------------------
    // List of Abundant numbers 'alst'
    let alst = []
    for(let k of Object.keys(abundantNumbers(n))) alst.push(k)
    
    // Set of sum of two abundandant numbers, 'sumASet'.
    let sumASet = new Set()
    for(let i = 0; i < alst.length; i++) {
        for(let j = i; j < alst.length; j++) {
            sumASet.add(Number(alst[i]) + Number(alst[j]))
        }
    }
    let sumAlst = [...sumASet].sort((a,b) => a-b)
    let sumNA = 0
    for(let i = 0; i < n; i++) {
        if(!sumAlst.includes(i)) sumNA += i 
    }
    return sumNA
}

console.log(sumOfNonAbundantNumbers(28123))

/*
function sumOfNonAbundantNumbers(n) {

  let abundantNumbers = (limit) => {
    let divSum = {}
    while (limit > 1){
      let divSet = new Set()
      let sqrN = Math.floor(Math.sqrt(limit))
      for( let i = 1; i <= sqrN; i++) {
        if (limit%i == 0) {
          divSet.add(i)
          let div = limit/i
            if(limit != div && i != div) divSet.add(div)
        }
      }
      let divLst = [...divSet].sort((a, b) => a - b)
      let sum = divLst.reduce((a, c) => a + c)
      if(sum > limit) divSum[limit] = sum
      limit--
    }
    return divSum;
  }
//---------------------------------------------
  // List of Abundant numbers 'alst'
  //let alst = []
  let aObj = abundantNumbers(n)
  let alst = Object.keys(aObj).map(Number);
  //Object.keys(aObj).forEach(k => alst.push(Number(k)))
  //for(let k of Object.keys(aObj)) alst.push(Number(k))
    
  // Set of sum of two abundandant numbers, 'sumASet'.
  let sumASet = new Set()
  for(let i = 0; i < alst.length; i++) {
    for(let j = i; j < alst.length; j++) {
      let sum = alst[i] + alst[j]
      if (sum <= n) sumASet.add(sum)
    }
  }
  // Ordered list of Sum of two Abundant numbers 'sumAlst'
  //let sumAlst = [...sumASet].sort((a,b) => a-b)

  // Sum of all Non-Abundant numbers 'sumNA'
  let sumNA = 0
  for(let i = 0; i <= n; i++) {
    if(!sumASet.has(i)) sumNA += i 
  }
  return sumNA
}

sumOfNonAbundantNumbers(28123);
*/
