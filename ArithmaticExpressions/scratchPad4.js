

function generatePermutations(str) {
  const results = [];

  if (str.length === 1) {
    return [str];
  }

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingPermutations = generatePermutations(remainingChars);
    for (let j = 0; j < remainingPermutations.length; j++) {
      results.push(currentChar + remainingPermutations[j]);
    }
  }
  return [...new Set(results)];
}

const inputString = 'abc';
const permutations = generatePermutations(inputString);
console.log(`Permutations of '${inputString}':`, permutations);
// Output: Permutations of 'abc': [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

const inputWithDuplicates = 'aab';
const permutationsWithDuplicates = generatePermutations(inputWithDuplicates);
console.log(`Permutations of '${inputWithDuplicates}':`, permutationsWithDuplicates);
// Output: Permutations of 'aab': [ 'aab', 'aba', 'baa' ]
