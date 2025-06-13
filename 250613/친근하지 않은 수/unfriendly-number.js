const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().toString());

let answer = 0;

for(let i = 1; i<=n; i++) {
    if(i%2 ===0 || i%3 ===0 || i%5 ===0) 
    continue;

    answer +=1;
}

console.log(answer);