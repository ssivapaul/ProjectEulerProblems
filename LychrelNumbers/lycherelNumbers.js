
function countLychrelNumbers(num) {
  let isPalindrome = (num) => {
    let nStr = String(num)
    let n = nStr.length - 1
    let palindrome = true
    for(let i = 0, j = n; i <= n; i++, j--) {
        if(nStr[i] !== nStr[j]) {
            palindrome = false
            break
        }
    }
    return palindrome
  }

  let reverse = (num) => {
    return Number(num.toString().split('').reverse().join(''))
  }

//Main routine
  let count = 0
  let temp = 0
  for(let i = 10; i < num; i++) {
    let cnt = 0
    let temp = i
    while(true) {
      if(cnt == 50) break
      let ly = temp + reverse(temp)
      if(isPalindrome(ly)) break
        temp = ly
        cnt++
    }
    if(cnt == 50) count++
  }
  return count
}


console.time("Lycherel")
console.log(countLychrelNumbers(1000)) // should return 13.
console.log(countLychrelNumbers(3243)) // should return 39.
console.log(countLychrelNumbers(5000)) //should return 76.
console.log(countLychrelNumbers(7654)) // should return 140.
console.log(countLychrelNumbers(10000)) // should return 249.
console.timeEnd("Lycherel")
