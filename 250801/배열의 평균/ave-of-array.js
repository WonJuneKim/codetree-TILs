const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr2d = [];
let rowAvg = [];
let colAvg = [];
let allAvg = [];

// 배열을 먼저 만들고, 각각 계산
let n = 2;
for(let i = 0; i<n; i++) {
    arr2d.push(input[i].split(" ").map(Number));
}

let sumAll = 0;

for(let i = 0; i<2; i++) { 
    let sumRow = 0;

    for(let j =0; j<4; j++) {
        sumRow += arr2d[i][j];
        sumAll += arr2d[i][j];
    }
    rowAvg.push((sumRow/4).toFixed(1));
}

for(let i = 0; i<4; i++) { 
    let sumCol = 0;
    for(let j =0; j<2; j++) {
        sumCol += arr2d[j][i];
    }
    colAvg.push((sumCol/2).toFixed(1));
}

allAvg.push((sumAll/8).toFixed(1));

console.log(rowAvg.join(" "));
console.log(colAvg.join(" "));
console.log(allAvg.join(" "));