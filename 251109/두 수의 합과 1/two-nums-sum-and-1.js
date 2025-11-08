const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let a = input[0];
let b = input[1];

let c = (a+b).toString();
let cnt = 0;

for(let i =0; i<c.length; i++){
    if(c[i] === '1') {
        cnt++;
    }
}

console.log(cnt);
