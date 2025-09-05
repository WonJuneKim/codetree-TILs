const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let str = input[0];
let text = input[1];
let find = false;

for(let i =0; i<str.length; i++) {
    if(str[i] === text && (find === false)) {
        console.log(i);
        find = true;
    }
}

if(find === false) {
    console.log("No");
}