
/*

function sumAmicableNum(n) {
    let divSum = (n) => {
        let sqn = Math.floor(Math.sqrt(n))
        let sum = 1
        for(let i = 2; i <= sqn; i++) {
            if(n%i == 0) {
                sum += i
                if(i !== Math.floor(n/i)) {
                    sum += Math.floor(n/i)
                }
            }
        }
        return sum;
    }

    let aNum = (n) => {
        let amiNum = {}

        for(let i = 2; i < n; i++) {
            amiNum[i] = `${divSum(i)}`
        }
        let lst = []
        let sum = 0
        for(a in amiNum) {
            if(Number(a) == Number(amiNum[amiNum[a]]))  {
                sum += (Number(a))
                lst.push(Number(a))
            }
        }
        return sum;
    }
    return aNum(n)
}

//console.log(sumAmicableNum(10000)); // ➜ 31626 ✅
//console.log(sumAmicableNum(5000));  // ➜ 8442 ✅
//console.log(sumAmicableNum(2000));  // ➜ 2898 ✅
console.log(sumAmicableNum(285));  // ➜ 504 ✅

/*
1. The divisor function divSum(n) is including n itself sometimes
It should only include proper divisors, i.e., divisors less than n. But your function:

if (!f.includes(m)) f.push(m);
can push m == n/i == n, when i == 1, so n itself could be included, which is not correct for this problem.

→ Example: For n = 284, it must not include 284 as a divisor.

2. Logic of a == amiNum[amiNum[a]] is flawed
You are using string keys and values like:

amiNum[n] = `${divSum(n)}`;
Then comparing:

if(a == amiNum[amiNum[a]] && a != amiNum[a])
But a is a string, not a number. So you're doing:

"284" == amiNum["220"]
This will always fail unless you carefully handle types.

✅ Fixes:
Here’s a corrected version with all the issues addressed:
*/

function sumAmicableNum(limit) {
  // Function to compute sum of proper divisors
  function divSum(n) {
    let d = new Set([1])
    let sqrt = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) {
        d.add(i)
        d.add(n/i)
      }
    }
    let sum = Array.from(d).reduce((a, c) => a + c, 0);
    return sum;
  }

  let total = 0;
  let aNum = []
  for (let a = 2; a < limit; a++) {
    let b = divSum(a);
    console.log("a: ", a, "b: ", b)
    if (b !== a && divSum(b) === a) {
      total += a;
      aNum.push(a)
    }
  }
  console.log(aNum)
  return total;
}

console.log(sumAmicableNum(285));

/*
console.log(sumAmicableNum(10000)); // ➜ 31626 ✅
console.log(sumAmicableNum(5000));  // ➜ 8442 ✅
console.log(sumAmicableNum(2000));  // ➜ 2898 ✅
console.log(sumAmicableNum(1000));  // ➜ 504 ✅
*/
