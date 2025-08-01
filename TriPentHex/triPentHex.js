function triPentaHexa(n) {
  let isPent = (n) => {
    return (1 + Math.sqrt(1 + 24*n))/6 % 1 === 0
}

let isHex = (n) => {
    return (1 + Math.sqrt(1 + 8*n))/4 % 1 === 0
}

for(let k = 286; true; k++) {
    let P = k*(k + 1)/2 
    if(isPent(P) && isHex(P)) {
      return P
    }
}
}

triPentaHexa(40756);