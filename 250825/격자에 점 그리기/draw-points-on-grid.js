const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let placed = Array(n).fill(0).map(()=>Array(n).fill(0));

for(let i = 1; i<=m; i++) {
    let r = input[i].split(" ")[0];
    let c = input[i].split(" ")[1];
    placed[r-1][c-1] = i;
    
}

for(let row = 0; row<n; row++) {
    console.log(placed[row].join(" "));
}

