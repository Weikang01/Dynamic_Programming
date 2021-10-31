const canSum = (targetNumber, numbers)=> {
    const table = Array(targetNumber + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetNumber; i++)
    {
        if (table[i])
            for (let number of numbers)
            {
                if (number + i <= targetNumber)
                    table[number + i] = true;
            }
    }

    return table[targetNumber];
}

console.log(canSum(28, [3,4]));