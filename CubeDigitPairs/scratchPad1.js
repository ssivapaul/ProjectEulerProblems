
let cubeDigitePairs = () => {
    //Helper function to list all dice combinations
    let combination = () => {
        let arr = '0123456789'.split('')
        let result = []
        let comb = (start, combo) => {
            if(combo.length == 6) {
                let copy = [...combo]
                if(copy.includes('6') && !copy.includes('9')) copy.push('9')
                if(copy.includes('9') && !copy.includes('6')) copy.push('6')
                let com = [...copy]
                result.push(com)
                return // Breaks the recursive call.
            } else {
                for(let i = start; i < arr.length; i++) {
                    combo.push(arr[i])
                    comb(i+1, combo)
                    combo.pop() // pop last item and create room for next item to be added
                }
            }
        }
    
        comb(0, [])
        return result
    }
    let count = 0
    let d = combination() // get the dice array
    let sqr = ['01', '04', '09', '16', '25', '36', '49', '64', '81']
    //let nums = ['0', '1', '2', '3', '4', '5', '6', '8', '9']
    for(let i = 0; i < d.length; i++) {
        for(let j = i + 1; j < d.length; j++) {
            let dSet = new Set()
            for(let a of d[i]) {
                for(let b of d[j]) {
                    if(sqr.includes(a+b)) dSet.add(a+b)
                    if(sqr.includes(b+a)) dSet.add(b+a)
                }
            }
            if(dSet.size == 9) count++
        }
    }
    return count
}

console.time("CubDigits")
console.log(cubeDigitePairs())
console.timeEnd("CubDigits")