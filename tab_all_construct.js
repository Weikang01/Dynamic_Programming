const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(null);
    table[0] = [[]];
    for (let i = 0; i <= target.length; i++)
        if (table[i])
            for (let word of wordBank)
            {
                if (target.slice(i, word.length + i) == word)
                    if (i + word.length <= target.length)
                    {
                        let ways = table[i].map(way => [...way, word]);
                        if (!table[i + word.length]) table[i + word.length] = [];
                        table[i + word.length].push(...ways);
                    }
            }
    return table[target.length];
}

console.log(allConstruct("abcdef", ["a", "ab", "b", "cd", "e", "ef", "f"]))