const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function getMax(n) {
    if(n===1) return arr[0];

    let prevMax = getMax(n-1);

    if(arr[n-1] >prevMax) {
        return arr[n-1];
    } else {
        return prevMax;
    }
}

console.log(getMax(n));