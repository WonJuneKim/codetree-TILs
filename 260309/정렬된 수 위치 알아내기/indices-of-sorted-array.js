const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

//새로운 arr를 만들어서 index 번호를 매기자
//수가 중복되어 주어질 수 있다.

const numberWithIdx = arr.map((x, i) => [x, i]);


numberWithIdx.sort((a,b)=> {
    if (a[0]===b[0]) return a[1]-b[1];

    return a[0]-b[0]
});

const result = Array(n);

numberWithIdx.forEach((num, idx) => {
    const originalIdx = num[1];
    result[originalIdx] = idx +1;
});

console.log(result.join(" "));