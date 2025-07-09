const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let arr = Array(10);
arr[0] = a;
arr[1] =b;  

for(let i = 2; i<10; i++) {
    arr[i] =(arr[i-1] + arr[i-2])%10;
}

console.log(arr.join(" "));