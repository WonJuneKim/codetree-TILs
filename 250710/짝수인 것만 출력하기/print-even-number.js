const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let newArr = [];

for (let i = 0; i<n; i++) {
    if (arr[i]%2 ===0) {
        newArr.push(arr[i]);
    }
}

console.log(newArr.join(" "));