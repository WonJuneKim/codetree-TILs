const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let answer = "";

for(let i =1; i<=n; i++) {
    if(i%2 ===0 || String(i)[0] === '5' || (i%3 ===0 && i%9 !==0)) 
    continue;

    answer += i + " ";
}

console.log(answer);