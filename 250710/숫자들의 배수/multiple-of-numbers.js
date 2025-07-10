const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let i = 1;
let arr = [];
let cnt = 0;

while(true) {
    if (cnt ===2) break;

    arr.push(n * i);
    
    if((n*i) %5 ===0) {
        cnt ++;
    }
    i++;
}

console.log(arr.join(" "));
//무한 증가
//입력값에 곱이 증가