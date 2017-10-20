const fs = require('fs');

function prime(n) {
    const sqrt = Math.sqrt(n);
    const list = new Array(n);
    list.fill(0);
    list[0] = 1;
    for (let i = 2; i <= sqrt; i++) {
        for (let j = i * 2; j <= n; j += i) {
            list[j] = 1;
        }
    }
    return list.map((v, i) => v ? 0 : i).filter(f => f);
};

const num = +process.argv[2];
const arr = prime(num);
console.log(arr.length);
fs.writeFileSync('./data/primes.json', JSON.stringify(arr));