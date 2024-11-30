const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let cnt = 0;

for (let i = 1; i < input; i++) {
    if (i%4 === 0) {
        cnt++;
    }
    if(i%100===0 && i%400 !==0) {
        cnt--;
    }
}

console.log(cnt);