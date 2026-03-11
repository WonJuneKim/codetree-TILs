const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

//구간은 길이 (지점- 점 이 아님)

const lines = Array(100).fill(0);

for (let [a,b] of segments) {
    for(let i = a-1; i<b-1; i++) {
        lines[i] += 1;
    }
}

let answer = Math.max(...lines);
console.log(answer);