const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum === 0) return true;
    if (targetSum in memo) return memo[targetSum];
    for (let num of numbers)
    {
        if (targetSum >= num)
            if (canSum(targetSum-num, numbers, memo))
            {
                memo[targetSum] = true;
                return true;
            }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(500, [7, 14]));