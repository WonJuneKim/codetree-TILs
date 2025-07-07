const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let n = input.length;
let result = [];

for (let i = 0; i<n; i++){
    if(input[i] === 0) break;

    result.push(input[i]);
}

console.log(result.reverse().join(" "));


//탐색은 처음 부터 순차적으로 해야함 (뒤에서 부터 x)
//탐색한 배열을 마지막에 뒤집기