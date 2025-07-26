

doubleBasePalindromes(1000000);function doubleBasePalindromes(n) {
  let isPalindrome = (str) => {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }

  let sum = 0
  for (let i = 1; i < n; i++) {
    let t = String(i)
    if(isPalindrome(t) && isPalindrome(i.toString(2))) sum += i
  }
  return sum
}

doubleBasePalindromes(1000000);