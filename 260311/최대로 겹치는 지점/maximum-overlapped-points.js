const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

let lines = Array(100+1).fill(0);

for(let [a,b] of segments) {
  for(let i = a; i<=b; i++) {
    lines[i] += 1;
  }
}

let max = 0;
for(let i =0; i< lines.length; i++) {
  if(lines[i] >max) {
    max = lines[i];
  }
}

console.log(max);