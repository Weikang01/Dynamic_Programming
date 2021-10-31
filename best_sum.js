const bestSum = (targetNum, numbers, memo = {}) => {
    if (targetNum === 0) return [];
    if (targetNum in memo) return memo[targetNum];

    let shortest = null;
    for (let num of numbers)
    {
        if (targetNum >= num)
        {
            let result = bestSum(targetNum - num, numbers, memo);
            if (result != null && (shortest == null || shortest.length > result.length + 1))
                shortest = [...result, num];
        }
    }

    memo[targetNum] = shortest;
    return shortest;
}

console.log(bestSum(40, [2, 3, 4]));
console.log(bestSum(201, [5, 8, 25]));
console.log(bestSum(300, [7, 14]));

/*
bestSum()
m = target sum
n = array length

brute force:
* time : O(n^m*m)
* space: O(m)

memoized:
* time : O(n*m^2)
* space: O(m^2)
*/