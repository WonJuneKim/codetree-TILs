const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let a = input[0];
let b = input[1];
let c = input[2];

function least(a,b,c) {
    let smallest = a;
    if(b<smallest) smallest = b;
    if(c<smallest) smallest = c;

    return smallest;

}

console.log(least(a,b,c));
