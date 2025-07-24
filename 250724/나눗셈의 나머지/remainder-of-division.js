const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let remainArr = Array(10).fill(0);

let a = input[0];
let b = input[1];

while (a >1) {
    let remain = a%b;
    remainArr[remain]++;
    a= Math.floor(a/b);
}

let sum= 0;

for (let i = 0; i<10; i++) {
    sum += (remainArr[i] * remainArr[i]);

}

console.log(sum);