const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

function numOfDays(m, d) {
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;

    for(let i =0; i<m; i++) {
        totalDays += days[i];
    }

    totalDays += d;

    return totalDays;
}

const totalDays = numOfDays(m2, d2) - numOfDays(m1, d1) +1;

console.log(totalDays);