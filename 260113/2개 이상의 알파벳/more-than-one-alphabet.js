const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

function checkDiff(arr) {
    let a = arr[0];
    for(let i =1; i<arr.length-1; i++) {
        if(arr[i] !== a) return "Yes";
    }
    return "No";
}

console.log(checkDiff(A));