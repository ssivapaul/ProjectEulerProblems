function digitnPowers(n) {
let sum = 0;
  let max = n * Math.pow(9, n); // upper bound

  for (let i = 10; i <= max; i++) {
    let digits = i.toString().split('').map(Number);
    let powerSum = digits.reduce((acc, d) => acc + Math.pow(d, n), 0);

    if (i === powerSum) {
      sum += i;
    }
  }

  return sum;
}

console.log(digitnPowers(5));

/*
So when does this estimation become invalid?
We need to find the largest number of digits d such that:

Maximum digit-power sum
≥
Smallest number with 
𝑑
 digits
Maximum digit-power sum≥Smallest number with d digits
That is:

𝑑
×
9
𝑛
≥
10
𝑑
−
1
d×9 
n
 ≥10 
d−1
 
Let’s try this with an example: n = 5

Try d = 1:
max sum: 
1
×
9
5
=
59049
1×9 
5
 =59049

smallest 1-digit number: 1 → ✅

d = 2:
max sum: 
2
×
9
5
=
118098
2×9 
5
 =118098

smallest 2-digit number: 10 → ✅

Keep going...

d = 6:
max sum: 
6
×
9
5
=
354294
6×9 
5
 =354294

smallest 6-digit number: 100000 → ✅

d = 7:
max sum: 
7
×
9
5
=
413343
7×9 
5
 =413343

smallest 7-digit number: 1000000 → ❌

Now: 
7
×
9
5
<
10
6
7×9 
5
 <10 
6
 

So we stop at d = 6, and set:

\text{Upper bound} = 6 \times 9^5 = 354294
]

In other words:

Any number beyond this can never be equal to the sum of the 5th powers of its digits.

✅ Summary Rule
You can safely set your upper bound as:

Upper bound
=
𝑛
×
9
𝑛
Upper bound=n×9 
n
 
Because:

It covers all possible values that could equal the sum of the n-th powers of their digits.

Anything beyond it cannot possibly qualify (the number becomes too big compared to the maximum sum its digits could produce).

Would you like a small JS snippet that automatically computes the max d satisfying 
𝑑
×
9
𝑛
≥
10
𝑑
−
1
d×9 
n
 ≥10 
d−1
 ?
*/