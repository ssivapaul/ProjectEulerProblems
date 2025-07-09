function powerDigitSum(exponent) {

    let str = BigInt(Math.pow(2, exponent)).toString()
    console.log(str)
    let sumDigits = (str) => {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += parseInt(str[i]);
        }
        return sum;
    }
  return sumDigits(str);
}

console.log(powerDigitSum(1000));