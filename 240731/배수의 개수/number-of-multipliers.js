const fs= require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let cnt1 = 0;
let cnt2 = 0;

for (let i = 0; i <= 9; i++) {
    if (Number(input[i]) % 3 === 0) {
        cnt1++;
    }
    if (Number(input[i]) % 5 === 0) {
        cnt2++;
    }
}

console.log(cnt1, cnt2);