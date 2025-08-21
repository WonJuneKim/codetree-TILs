const fs =require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let arr2d = Array(n).fill(0).map(()=> Array(n).fill(0));

for (let i = 0; i <n; i++) {
    arr2d[i][0] = 1;
    arr2d[0][i] = 1;
}

for (let row = 1; row <n; row++) {
    for(let col = 1; col <n; col++) {
        arr2d[row][col] = arr2d[row-1][col] + arr2d[row][col-1] + arr2d[row-1][col-1];
    }
}


for (let row =0; row<n; row++) {
    console.log(arr2d[row].join(" "));
}