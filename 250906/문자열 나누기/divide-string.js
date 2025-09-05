const fs =require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ");
let str = "";

for(let i=0; i<n; i++) {
    str += arr[i];

    if(str.length >=5) {
        console.log(str.slice(0,5));
        str = str.slice(5);
    }
}

console.log(str);
