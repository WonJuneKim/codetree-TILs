const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let arr2d = Array(n).fill(0).map(()=>Array(n).fill(0));

let num = 1;
for(let col = 0; col < n; col++) {
    for(let row = 0; row < n; row++) {
        arr2d[row][col] = num++;
    }
}

for (let row = 0; row < n; row++) {
    console.log(arr2d[row].join(" "));
}