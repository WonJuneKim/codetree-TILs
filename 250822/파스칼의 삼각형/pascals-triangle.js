const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let arr2d = Array(n).fill(0).map(()=>Array(n).fill(0));

for (let row = 0; row <n; row++) {
    for(let col = 0; col<=row; col++) {
        if(col===0 || col===row) {
            arr2d[row][col] = 1;
        } else {
            arr2d[row][col] = arr2d[row-1][col-1] + arr2d[row-1][col];
        }
    }
}

for(let row =0; row<n; row++) {
    const answerRow = arr2d[row].slice(0, row+1);

    console.log(answerRow.join(" "));
}