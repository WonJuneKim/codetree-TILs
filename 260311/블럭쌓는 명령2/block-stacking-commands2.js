const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

//segments 는 a~b까지 쌓는 블럭 구역을 나타냄

const blocks = Array(n).fill(0);

for(let [a, b] of segments) {
    for(let i = a-1; i<b; i++) {
        blocks[i] += 1;
    }
}

let max = 0;
for(let i = 0; i<n; i++) {
    if(blocks[i] >max) {
    max = blocks[i];
    }
}

console.log(max);