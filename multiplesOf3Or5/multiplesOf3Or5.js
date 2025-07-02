function multiplesOf3Or5(number) {
  let sum = 0;
  let i = 3;
  while (i < number) {
    if (!(i % 3) || (i >= 5 && !(i % 5))) {
      sum += i;
      console.log(sum);
    }

    i++;
  }
  return sum;
}

console.log(multiplesOf3Or5(10));
