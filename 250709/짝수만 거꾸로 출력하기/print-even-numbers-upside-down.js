const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

//일반 배열에서 짝수를 뽑자
// 뽑은 애들을 새 배열에 넣고, 돌려서 출력 혹은 reverse()

let arr = input[1].split(" ").map(Number);
let newArr = [];

for(let i = 0; i<n; i++) {
    if(arr[i]%2 ===0) {
        newArr.push(arr[i]);
    }
}

console.log(newArr.reverse().join(" "));

