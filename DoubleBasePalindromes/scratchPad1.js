
let isPalindrome = (str) => {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

let sum = 0
for (let n = 1; n < 1000000; n++) {
    let t = String(n)
    if(isPalindrome(t) && isPalindrome(n.toString(2))) {
        sum += n
        console.log(n, n.toString(2))
    }
}

console.log(sum)