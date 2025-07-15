const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let arr = [];
let i = 0;
let n = input[i];

while(n !== 0) {

    if(n%2 ===1) {
        arr.push(n+3);
    }
    else if(n %2 ===0) {
        arr.push(n/2);
    }
    i++;

    n =input[i];
}

console.log(arr.join(" "));

//계속 반복하다가 0이 주어지면 가공 값을 출력