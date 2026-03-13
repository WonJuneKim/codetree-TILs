const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

//배열을 생성하고, 지나갈때 마다 1씩 추가 
//마지막에 2이상인 곳을 카운팅

const size = 3000;
const OFFSET = 1500;

let diff = Array(size).fill(0);

let cur = 0;

for(const lines of commands) {
    const [xStr, dir] = lines.split(" ");
    const x = Number(xStr);

    let next = dir === "R" ? cur + x : cur - x;

    let a = Math.min(cur, next);
    let b = Math.max(cur, next);

    diff[a+OFFSET] += 1;
    diff[b+OFFSET] -= 1;

    cur = next;
}

for(let i =0; i<size; i++) {
    diff[i+1] += diff[i];
}

let answer = 0;
for(let i =0; i<size; i++) {
    if(diff[i]>=2) answer++;
}

console.log(answer);