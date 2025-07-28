let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

for (let i = 0; i<n-1; i++) {
    for (let j = 0; j<n-i-1; j++) {
        if (arr[j] < arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr[0], arr[1]);