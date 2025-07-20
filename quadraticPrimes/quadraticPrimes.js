function quadraticPrimes(range) {
    let is_Prime = (x) => {
        if (x <= 1)
        return false;
    for(let i = 2; i <= x / 2; i++) {
      if(x % i == 0) {
         return false;
      }
   }
    return true;
    }
//-----------------------------------------------
    let prime = []
    let max_cnt = 0
    let max_a = 0
    let max_b = 0

    for (let a = -range; a < range; a++) {
        for(let b = -range; b < range; b++) {
            let cnt = 0
            let l = []
            while(is_Prime(Math.pow(cnt, 2) + a*cnt + b)) {
                l.push(Math.pow(cnt, 2) - a*cnt + b)
                cnt++            
            }
            if(cnt > max_cnt) {
                max_cnt = cnt
                max_a = a
                max_b = b
                prime = l
            }
        }
    }
    return (max_a*max_b)
}

console.log(quadraticPrimes(1000))