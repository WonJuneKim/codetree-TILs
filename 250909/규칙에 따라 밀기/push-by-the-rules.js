const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0];
let order = input[1];

for(let i = 0; i<order.length; i++) {
    if(order[i] ==="L") {
        str = str.slice(1) +str[0];

    } else if(order[i] ==="R") {
        str = str.slice(-1) + str.slice(0,-1);
    }
}

console.log(str);