const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === "") return 1;

    let c = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            c += countConstruct(target.slice(word.length), wordBank, memo);
        }
    }
    memo[target] = c;
    return c;
}

console.log(countConstruct("abcdef", ["ab", "cd", "ef", "abcd"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", ["e", "ee", "eee", "eeee", "eeeee"]));