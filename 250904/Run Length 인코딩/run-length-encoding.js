const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

//신규면 새로 생성, cnt 올리기
//기존이면 그냥 cnt 올리기

let result = "";
let cnt = 1;

for(let i = 0; i<a.length; i++) {
    if(a[i] === a[i+1]) {
        cnt++;
    } else {
        result += a[i] + cnt;
        cnt =1;
    }

}

console.log(result.length);
console.log(result);