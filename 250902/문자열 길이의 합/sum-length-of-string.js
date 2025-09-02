const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0];

let lenAll = 0;
let cnt = 0;

for(let i = 1; i<=n; i++) {
    lenAll += input[i].length;

    if(input[i][0] === "a") {
        cnt++;
    }
}

console.log(lenAll, cnt);