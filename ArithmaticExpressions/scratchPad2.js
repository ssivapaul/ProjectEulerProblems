
//let arr = ['a', 'b', 'c', 'd']
//let subArr = arr.slice(0, 0).concat(arr.slice(1))
//console.log(subArr)

let lPerm = (arr, k) => {
    let result = [];
    let perm = (cPerm, rItems) => {
        if (cPerm.length === k) {
            result.push(cPerm);
            return;
        }
        for (let i = 0; i < rItems.length; i++) {
            let nextItem = rItems[i];
            let nRItems = rItems.slice(0, i).concat(rItems.slice(i + 1));
            perm(cPerm.concat(nextItem), nRItems);
        }
    }
    perm([], arr);
    return result;
}

//let arr = ['a', 'b', 'c', 'd']
//let r = 3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let r = 4
console.log(lPerm(arr, r))