const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function absoluteChange(arr) {
    let answer = [];
    for(let i=0; i<n; i++) {
        if(arr[i] <0) {
            arr[i] = - arr[i];
            answer.push(arr[i]);
        }
        else { 
            answer.push(arr[i]);
        }
    }
    return answer;
}

console.log(absoluteChange(arr).join(" "));