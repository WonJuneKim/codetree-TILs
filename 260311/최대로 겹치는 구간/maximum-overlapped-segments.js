const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

//구간은 길이 (지점- 점 이 아님)
const OFFSET = 100;
const diff = Array(201+1).fill(0);

for (let [a,b] of segments) {
    diff[a+OFFSET] +=1;
    diff[b+OFFSET] -=1;
}

let max = 0;
let current = 0;

for(let i =0; i<diff.length; i++) {
    current += diff[i];
    if(current > max) max = current;
}
console.log(max);