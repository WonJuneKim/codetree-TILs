const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let sumVal =0;

for(let i = 0; i<n; i++) {
    sumVal += arr[i];
}

let average = (sumVal/n).toFixed(1);
let comment = "";

if(average>=4.0) {
    comment = "Perfect";
} else if(average >=3.0) {
    comment = "Good";
}else {
    comment = "Poor"
};

console.log(average);
console.log(comment);

