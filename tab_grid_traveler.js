const gridTraveler = (x, y) => {
    const table = Array(y + 1).fill().map(()=>Array(x + 1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= y; i++) {
        for (let j = 0; j <= x; j++) {
            if (i+1 <= y) table[i+1][j] += table[i][j];
            if (j+1 <= x) table[i][j+1] += table[i][j];
        }
    }
    return table[y][x];
}

console.log(gridTraveler(10,7));