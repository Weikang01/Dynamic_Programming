const canConstruct = (target, wordBank, memo={}) => {
    if (target === "") return true;
    if (target in memo) return memo[target];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            if (canConstruct(target.slice(word.length), wordBank, memo))
            {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

console.log(canConstruct("abcdef", ["ab", "cd", "def", "abcd"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]));

/*
canConstruct()
m = target.length
n = wordBank.length

brute force:
* time : O(n^m*m)
* space: O(m)

memoized:
* time : O(n*m^2)
* space: O(m^2)
*/