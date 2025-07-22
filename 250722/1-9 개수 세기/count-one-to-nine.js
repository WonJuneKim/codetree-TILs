const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let count = input[1];

// 1~9까지니까 총 10칸의 배열이 필요함(배열은 0부터 시작하니까)
let arr = Array(10).fill(0);

//숫자 개수를 세는 과정
//count 배열을 순회해서 각 배열에서 예를 들어 1이라는 값을 가지면 +1 값을 가진 arr 배열에 저장
for (let i = 0; i<10; i++) {
    arr[Number(count[i])+1]++;
}

for(let i =1; i<10; i++) {
    console.log(arr[i]);
}