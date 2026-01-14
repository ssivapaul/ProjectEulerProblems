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

// Example
for (const c of combinationGenerator([1, 2, 3, 4], 3)) {
    console.log(c);
}

function* combinationsIter(arr, r) {
    const n = arr.length;
    if (r > n) return;

    const idx = Array.from({ length: r }, (_, i) => i);
    while (true) {
        yield idx.map(i => arr[i]);

        let i = r - 1;
        while (i >= 0 && idx[i] === n - r + i) i--;
        if (i < 0) break;

        idx[i]++;
        for (let j = i + 1; j < r; j++) {
            idx[j] = idx[j - 1] + 1;
        }
    }
}

// Example
for (const c of combinationsIter([1, 2, 3, 4, 5], 3)) {
    console.log(c);
}
