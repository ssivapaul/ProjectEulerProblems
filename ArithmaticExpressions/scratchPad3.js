

const permutations = arr => {
  if (arr.length === 0) return [
    []
  ];
  return arr.reduce((acc, current, i) => {
    const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permsOfRemaining = permutations(remaining);

    permsOfRemaining.forEach(p => {
      acc.push([current, ...p]);
    });

    return acc;
  }, []);
};


const originalArray = [1, 2, 3];
const allPermutations = permutations(originalArray);
console.log(allPermutations);
