const countConstruct = (target, wordBank) => {
    let table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++)
        if (table[i])
            for (let word of wordBank)
                if (i + word.length <= target.length)
                    if (target.slice(i, i+word.length) == word)
                        table[i+word.length]+= table[i];
    return table;
}

console.log(countConstruct("abcdef", ["a", "ab", "b", "cd", "e", "ef", "f"]))