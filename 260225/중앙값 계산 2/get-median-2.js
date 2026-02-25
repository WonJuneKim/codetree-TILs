const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// 1. 입력받은 값 중에 중앙값을 구하는 함수
// 배열을 매개변수로?

function checkMiddle(arr) {
    arr.sort((a,b)=> a-b);
    return arr[Math.floor(arr.length/2) +1];
}

function checkMiddle(arr) {
    const sorted = [...arr].sort((a,b)=>a-b);
    return sorted[Math.floor(sorted.length/2)];
}

let words = [];
let answer = [];

for(let i = 0; i<n; i++) {
    words.push(arr[i])
    if(i%2 ===0) {
        answer.push(checkMiddle(words));
    }
}

console.log(answer.join(" "));