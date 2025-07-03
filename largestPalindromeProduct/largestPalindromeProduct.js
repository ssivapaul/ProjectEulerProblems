let isPalindrome = (str) => {
    let backwardString = str.split('').reverse().join('')
    if (str === backwardString) {
        return true
    }
    return false
}


let largestpalindromeProduct = (numOfDigits) => {
    let largestProduct = 0;
    let i, j;
    let startStr = '1'
    for (i = 1; i < numOfDigits; i++) {
        startStr += "0";
    }
    let endStr = startStr + '0'
    let startVal = parseInt(startStr)
    let endVal = parseInt(endStr) - 1
    for (i = startVal; i <= endVal-1; i++) {
        for (j = startVal + 1; j <= endVal; j++) {
            let product = i * j
            if (isPalindrome(product.toString()) && product > largestProduct) {
                largestProduct = product
            }
        }
    }
    return largestProduct;
}

console.log('Result is ' + largestpalindromeProduct(3))