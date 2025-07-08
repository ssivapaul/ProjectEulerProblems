function longestCollatzSequence(limit) {
    console.log(findMax(limit))
    let [_, n] = findMax(limit)
    return n
}

let findMax = (l) => {
     let maxNum = 0
    let maxLength = 0
    for(let i = 0; i < l; i++) {
        let s = [l-i]
        let t = l-i
        while (t > 1) {
            if(t%2 === 0) {
                s.push(t/2)
                t /= 2
            } else {
                t = 3*t+1
                s.push(t)
            }
        }
        if(s.length > maxLength) {
            maxLength = s.length
            maxNum = l-i
        }     
    }
  return [maxLength, maxNum];
}

console.log(longestCollatzSequence(14));