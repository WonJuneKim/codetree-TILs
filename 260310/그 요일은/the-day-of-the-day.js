const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

//m2, d2가 m1,d1 보다 앞서지는 않는다.



//~까지 일 수 더하기
function numOfDays(m,d) {
    const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let total = 0;

    for(let i =1; i<m; i++) {
        total += days[i];
    }

    return total + d;
}

let start = numOfDays(m1,d1);
let end = numOfDays(m2,d2);

const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const target = week.indexOf(A);

let count = 0;

for(let i =start; i<=end; i++) {
    const diff =(i-start) %7;
    if(diff === target)count++;
}

console.log(count);