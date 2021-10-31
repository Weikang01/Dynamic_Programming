const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i])
            for (let word of wordBank)
                if (i+word.length <= target.length)
                    if (target.slice(i, i+word.length) == word)
                        table[i + word.length] = true;
    }

    return table[target.length];
}

console.log(canConstruct("abcdef", ["a", "ab", "cd", "e", "ef"]));