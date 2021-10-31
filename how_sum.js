const howSum = (targetNum, numbers, memo={}) => {
    if (targetNum === 0) return [];
    if (targetNum in memo) return memo[targetNum];
    for (let num of numbers) {
        if (targetNum >= num)
        {
            let result = howSum(targetNum-num, numbers);
            if (result != null)
            {
                memo[targetNum] = [...result, num];
                return memo[targetNum];
            }
        }
    }
    memo[targetNum] = null;
    return null;
}

console.log(howSum(11, [2, 3, 4]));
console.log(howSum(200, [25, 8, 5]));

/*
howSum()
m = target sum
n = array length

brute force:
* time : O(n^m*m)
* space: O(m)

memoized:
* time : O(n*m^2)
* space: O(m^2)
*/