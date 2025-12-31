

let sqr = (num) => {
    let Sn = num/2
    while(true) {
        SnPlus1 = (Sn + num/Sn)/Sn
        if(Sn == SnPlus1) {
           
            if(Sn**2 == num) return Sn
            else return 0
        }
        
        else {
            
            Sn = SnPlus1
            console.log(Sn)
        }
    }
}

console.log(sqr(17))
