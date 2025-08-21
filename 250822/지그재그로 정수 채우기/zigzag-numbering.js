const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);
let arr2d = Array(n).fill(0).map(()=>Array(m).fill(0));

let num = 0;
for (let col = 0; col < m; col++) {
  if (col % 2 === 0) {
    for (let row = 0; row < n; row++) {
      arr2d[row][col] = num++;
    }
  } else {
    for (let row = n - 1; row >= 0; row--) {
      arr2d[row][col] = num++;
    }
  }
}

for (let row = 0; row < n; row++) {
  console.log(arr2d[row].join(" "));
}