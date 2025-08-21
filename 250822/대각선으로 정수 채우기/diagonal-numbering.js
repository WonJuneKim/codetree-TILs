const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);

let arr2d = Array(n).fill(0).map(()=>Array(m).fill(0));

let num = 1;

for(let sum = 0; sum<n+m-1; sum++) {
  for(let i = 0; i<n; i++) {
    const j = sum-i;

    if(j>=0 && j<m) {
      arr2d[i][j] = num++;
    }
  }
}

for (let col = 0; col < n; col++) {
  console.log(arr2d[col].join(" "));
}

