const allConstruct = (target, wordBank, memo={}) => {
    if (target === "") return [[]];

    let targetWays = [];
    for (let word of wordBank)
    {
        if (target.indexOf(word) === 0)
        {
            let suffixWays = allConstruct(target.slice(word.length), wordBank, memo);
            if (suffixWays != null)
            {
                const wordWays = suffixWays.map(way => [word, ...way]);
                targetWays.push(...wordWays);
            }
        }
    }
    memo[target] = targetWays === []? null: targetWays;
    return memo[target];
}

console.log(allConstruct("abcdef", ["ab", "cd", "ef", "abcd"]));
console.log(allConstruct("eeeeee", ["e", "ee", "eee", "eeee", "eeeee"]));
console.log(allConstruct("eeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]));