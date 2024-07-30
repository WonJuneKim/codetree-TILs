const fs= require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0;

for (let i = 0; i <= 9; i++) {
    if (Number(input[i]) % 2 === 1) {
        cnt++;
    }
}

console.log(cnt);