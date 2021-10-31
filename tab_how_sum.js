const howSum = (targetNumber, numbers)=>{
    const table = Array(targetNumber + 1).fill(null);
    table[0]= [];
    for (let i = 0; i <= targetNumber; i++) {
        if (table[i]) {
            for (let num of numbers)
                if (num + i <= targetNumber) table[num + i] = [num, ...table[i]];
        }
    }
    return table[targetNumber];
}

console.log(howSum(20, [4,3,2,1,5]));