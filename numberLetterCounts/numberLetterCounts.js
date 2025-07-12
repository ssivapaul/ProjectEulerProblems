/*

one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twenty-one, twenty-two, twenty-three, twenty-four, twenty-five, twenty-six, twenty-seven, twenty-eight, twenty-nine, thirty, thirty-one, thirty-two, thirty-three, thirty-four, thirty-five, thirty-six, thirty-seven, thirty-eight, thirty-nine, forty, forty-one, forty-two, forty-three, forty-four, forty-five, forty-six, forty-seven, forty-eight, forty-nine, fifty, fifty-one, fifty-two, fifty-three, fifty-four, fifty-five, fifty-six, fifty-seven, fifty-eight, fifty-nine, sixty, sixty-one, sixty-two, sixty-three, sixty-four, sixty-five, sixty-six, sixty-seven, sixty-eight, sixty-nine, seventy, seventy-one, seventy-two, seventy-three, seventy-four, seventy-five, seventy-six, seventy-seven, seventy-eight, seventy-nine, eighty, eighty-one, eighty-two, eighty-three, eighty-four, eighty-five, eighty-six, eighty-seven, eighty-eight, eighty-nine, ninety, ninety-one, ninety-two, ninety-three, ninety-four, ninety-five, ninety-six, ninety-seven, ninety-eight, ninety-nine, one hundred. 


data = {
    'one': 1, 'two': 1, 'three': 1, 'four': 1, 'five': 1, 'six': 1, 'seven': 1, 'eight': 1, 'nine': 1, 'ten': 1, 'eleven': 1, 'twelve': 1, 'thirteen': 1, 'fourteen': 1, 'fifteen': 1, 'sixteen': 1, 'seventeen': 1, 'eighteen': 1, 'nineteen': 1, 'twenty': 1, 'thirty': 1, 'forty': 1, 'fifty': 1, 'sixty': 1, 'seventy': 1, 'eighty': 1, 'ninety': 1, 'hundred': 1, 'thousand': 1, 'and': 1 
}


function numberLetterCounts(limit) {
    words_100 = {
    'one': 10, 'two': 9, 'three': 9, 'four': 9, 'five': 9, 'six': 9, 'seven': 9, 'eight': 9, 'nine': 9, 'ten': 1, 'eleven': 1, 'twelve': 1, 'thirteen': 1, 'fourteen': 1, 'fifteen': 1, 'sixteen': 1, 'seventeen': 1, 'eighteen': 1, 'nineteen': 1, 'twenty': 10, 'thirty': 10, 'forty': 10, 'fifty': 10, 'sixty': 10, 'seventy': 10, 'eighty': 10, 'ninety': 10, 'hundred': 1, 'and': 0 
    }

    words_1000 = {
    'one': 191, 'two': 190, 'three': 190, 'four': 190, 'five': 190, 'six': 190, 'seven': 190, 'eight': 190, 'nine': 190, 'ten': 10, 'eleven': 10, 'twelve': 10, 'thirteen': 10, 'fourteen': 10, 'fifteen': 10, 'sixteen': 10, 'seventeen': 10, 'eighteen': 10, 'nineteen': 10, 'twenty': 100, 'thirty': 100, 'forty': 100, 'fifty': 100, 'sixty': 100, 'seventy': 100, 'eighty': 100, 'ninety': 100, 'hundred': 900, 'thousand': 1, 'and': 891 
    }

    words_150 = {
    'one': 64, 'two': 13, 'three': 13, 'four': 13, 'five': 13, 'six': 13, 'seven': 13, 'eight': 13, 'nine': 13, 'ten': 2, 'eleven': 2, 'twelve': 2, 'thirteen': 2, 'fourteen': 2, 'fifteen': 2, 'sixteen': 2, 'seventeen': 2, 'eighteen': 2, 'nineteen': 2, 'twenty': 20, 'thirty': 20, 'forty': 20, 'fifty': 11, 'sixty': 10, 'seventy': 10, 'eighty': 10, 'ninety': 10, 'hundred': 51, 'and': 50 
    }

    words_5 = {
    'one': 1, 'two': 1, 'three': 1, 'four': 1, 'five': 1
    }

    if (limit === 1000) {
        sum = 0
        for(k in words_1000) sum += k.length*words_1000[k]
        return sum
    }

    if (limit === 150) {
        sum = 0
        for(k in words_150) sum += k.length*words_150[k]
        console.log(typeof(sum))
        return sum
    }

    if (limit === 5) {
        sum = 0
        for(k in words_5) sum += k.length*words_5[k]
        return sum
    }
}

console.log(numberLetterCounts(150)) 
console.log(typeof(numberLetterCounts(150)))
/*

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
The use of "and" when writing out numbers is in compliance with British usage.

Tests
Waiting:1. numberLetterCounts(5) should return a number.
Waiting:2. numberLetterCounts(5) should return 19.
Waiting:3. numberLetterCounts(150) should return 1903.
Waiting:4. numberLetterCounts(1000) should return 21124.

*/


function numberLetterCounts(limit) {
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
                 "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty",
                "sixty", "seventy", "eighty", "ninety"];

  function numToWords(n) {
    if (n === 1000) return "onethousand";
    let word = "";

    if (n >= 100) {
      word += ones[Math.floor(n / 100)] + "hundred";
      if (n % 100 !== 0) {
        word += "and";
      }
      n %= 100;
    }

    if (n >= 20) {
      word += tens[Math.floor(n / 10)];
      word += ones[n % 10];
    } else if (n >= 10) {
      word += teens[n - 10];
    } else {
      word += ones[n];
    }

    return word;
  }

  let totalLetters = 0;
  for (let i = 1; i <= limit; i++) {
    totalLetters += numToWords(i).length;
  }

  return totalLetters;
}

console.log(numberLetterCounts(100))
