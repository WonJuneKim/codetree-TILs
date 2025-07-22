const fs =require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let numArr = Array(7).fill(0);

for (let i = 0; i<input.length; i++) {
    numArr[input[i]]++;
}

for(let i = 1; i<=6; i++) {
    console.log(i + " - " + numArr[i]);
}
