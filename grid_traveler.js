const gridTraveler = (x, y, memo = {}) =>{
    let key = x + ',' + y;

    if (key in memo) return memo[key];
    if (x == 0 || y == 0) return 0;
    if (x == 1 || y == 1) return 1;

    memo[key] = gridTraveler(x-1, y, memo) + gridTraveler(x, y-1, memo);
    return memo[key]; 
}

console.log(gridTraveler(18, 18));