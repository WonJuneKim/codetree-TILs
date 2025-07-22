const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let count = input[1];

let arr = Array(10).fill(0);

//숫자 개수를 세는 과정
for (let i = 0; i<10; i++) {
    arr[count[i]]++;
}

for(let i =1; i<10; i++) {
    console.log(arr[i]);
}