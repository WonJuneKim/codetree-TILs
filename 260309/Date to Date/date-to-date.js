const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// m2월 d2 일까지 날짜 - m1월 d1일 까지 날짜

let targetDay =0;

for(let i =0; i<m2; i++) {
    targetDay +=num_of_days[i];
}

targetDay += d2;

let startDay =0;

for(let i =0; i<m1; i++) {
    startDay +=num_of_days[i];
}

startDay += d1;

console.log(targetDay-startDay+1);