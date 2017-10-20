const num = 7;
const arr = require('./data/primes.json').map(v => v % num);
const nrm = arr.length / num / num / num;

function matrix(n) {
    const r = {};
    for(let i = 0; i < n; i++) {
        r[i] = {};
        for(let j = 0; j < n; j++) {
            r[i][j] = {};
            for(let k = 0; k < n; k++) {
                r[i][j][k] = 0;
            }
        };
    };
    return r;
}

let c, p, pp;
const res = matrix(num);
for (let i = 2; i < arr.length; i++) {
    c = arr[i];
    p = arr[i - 1];
    pp = arr[i - 2];
    res[c][p][pp]++;
}

console.log(res);
console.log(nrm);