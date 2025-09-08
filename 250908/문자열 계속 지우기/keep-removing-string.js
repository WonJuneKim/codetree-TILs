const fs= require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0];
let b = input[1];
let ans = "";

for (let i = 0; i<a.length; i++) {
    let idx = a.indexOf(b);

    if(idx === -1) break;
    ans = a.slice(0, idx) + a.slice(idx+b.length);

    a = ans;


}

console.log(a);