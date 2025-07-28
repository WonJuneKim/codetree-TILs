const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

//중복되는지 한번 더 체크??

let maxVal = -1;

for (let i = 0; i<n; i++) {
    if(arr[i] > maxVal) {
        maxVal = arr[i];
    }

    let cnt = 0;

    for(let j = 0; j<n; j++) {
        if(arr[j] === maxVal) {
            cnt++;
        }

        if(cnt >1) {
            maxVal = -1;
            break;
        }
    }
}

console.log(maxVal);