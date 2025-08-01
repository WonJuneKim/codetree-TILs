const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let arr1 = Array(n).fill(0).map(() => Array(m).fill(0));
let arr2 = Array(n).fill(0).map(() => Array(m).fill(0));
let arr3 = Array(n).fill(0).map(() => Array(m).fill(0));

//첫번째 격자
for (let i = 0; i<n; i++) {
    arr1[i] = input[i+1].split(" ").map(Number);
}

//두번째 격자
for (let i = 0; i<n; i++) {
    arr2[i] = input[i+1+n].split(" ").map(Number);
}

for (let i = 0; i<n; i++) {
    for(let j = 0; j<m; j++) {
        if(arr1[i][j] === arr2[i][j]) {
            arr3[i][j] = 0;
        } else {
            arr3[i][j] = 1;
        }
    }
}

for (row of arr3) {
    let str = "";
    for (elem of row) {
        str += elem + " ";
    }
    console.log(str);
}
