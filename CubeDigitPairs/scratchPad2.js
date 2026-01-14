
function combinations(arr, r) {
    const result = [];

    function backtrack(start, combo) {
        if (combo.length === r) {
            result.push([...combo]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            combo.push(arr[i]);
            backtrack(i + 1, combo);
            combo.pop();
        }
    }

    backtrack(0, []);
    return result;
}

// Example
const items = [1, 2, 3, 4, 5];
console.log(combinations(items, 3));


function* combinationGenerator(arr, r, start = 0, combo = []) {
    if (combo.length === r) {
        yield [...combo];
        return;
    }

    for (let i = start; i < arr.length; i++) {
        combo.push(arr[i]);
        yield* combinationGenerator(arr, r, i + 1, combo);
        combo.pop();
    }
}

/*
for (const c of combinationGenerator([1, 2, 3, 4], 3)) {
    console.log(c);
}

*/
