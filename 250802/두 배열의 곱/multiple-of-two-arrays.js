const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr2d = Array(3).fill(0).map(() => Array(3).fill(0));

for (let i = 0; i<3; i++) {
    for(let j = 0; j<3; j++) {
        arr2d[i][j] = input[i].split(" ").map(Number)[j]; 
    }
}

for (let i = 4; i<7; i++) {
    for (let j = 0; j<3; j++) {
        arr2d[i-4][j] *= input[i].split(" ").map(Number)[j];
    }
}

for (let row of arr2d) {
    let str = "";
    for(let elem of row) {
        str += elem + " ";
    }
    console.log(str);
}