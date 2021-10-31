const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;

    for (let i= 2; i <= n; i++)
        table[i] = table[i-2] + table[i-1];
    return table[n];
}

const fib2 = (n) => {
    let a = 1;
    let b = 0;
    let r = 0;
    for (let i = 2; i <= n; i++) {
        r = a + b;
        b = a;
        a = r;
    }
    return r?r:1;
}

console.log(fib2(2) );
console.log(fib2(8) );
console.log(fib2(14));
console.log(fib2(99));