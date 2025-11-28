

function pathSumFourWays(matrix) {
    const l = matrix.length - 1;
    let g = {}, n = {}, p = {};

    // Build node weights
    for (let i = 0; i <= l; i++) {
        for (let j = 0; j <= l; j++) {
            n[`${i}${j}`] = matrix[i][j];
        }
    }

    // Build graph adjacency
    for (let i = 0; i <= l; i++) {
        for (let j = 0; j <= l; j++) {
            let k = `${i}${j}`;
            g[k] = [];

            if (i+1 <= l) g[k].push(`${i+1}${j}`);
            if (j+1 <= l) g[k].push(`${i}${j+1}`);
            if (i-1 >= 0) g[k].push(`${i-1}${j}`);
            if (j-1 >= 0) g[k].push(`${i}${j-1}`);

            p[k] = Infinity;     // Set all distances to infinity
        }
    }

    // Starting node
    p["00"] = n["00"];

    // Priority queue: [cost, node]
    let pq = [[p["00"], "00"]];

    while (pq.length) {
        // Pop lowest-cost node
        pq.sort((a, b) => a[0] - b[0]);
        let [cost, node] = pq.shift();

        // Early exit if bottom-right reached
        if (node === `${l}${l}`) return cost;

        // Skip outdated entries
        if (cost > p[node]) continue;

        // Relax neighbors
        for (let nr of g[node]) {
            let nd = cost + n[nr];
            if (nd < p[nr]) {
                p[nr] = nd;
                pq.push([nd, nr]);
            }
        }
    }

    return p[`${l}${l}`];
}
