const bestSum = (targetNumber, numbers) => {
    const table = Array(targetNumber + 1).fill(null);
    table[0] = [];

    for (let i = 0; i < targetNumber + 1; i++) 
    {
        if (table[i])
        {
            for (let num of numbers)
            {
                if (i + num <= targetNumber)
                {
                    if (!table[i+num] || table[i+num].length > table[i].length + 1)
                        table[i+num] = [num, ...table[i]];
                }
            }
        }
    }

    return table;
}

console.log(bestSum(20, [4,3,2,1,5]));