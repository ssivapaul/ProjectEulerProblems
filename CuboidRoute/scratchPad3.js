

let gcd = (a, b) => (!b ? a : gcd(b, a % b));

let gcd_it = (a, b) => {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

let g = []
for(let n = 1; n < 100; n++) {
    for(let m = n; m < 100; m++) {

    }
}
console.time("Cuboid")
g.sort((a, b) => a[1]-b[1])
console.log(g)
console.timeEnd("Cuboid")

/*
Tests
Waiting:1. cuboidRoute(2000) should return a number.
Waiting:2. cuboidRoute(2000) should return 100.
Waiting:3. cuboidRoute(25000) should return 320.
Waiting:4. cuboidRoute(500000) should return 1309.
Waiting:5. cuboidRoute(1000000) should return 1818.
*/