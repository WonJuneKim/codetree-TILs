const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

const sortedA =a.sort((x,y)=>x-y);
const sortedB = b.sort((x,y)=>x-y);

function f(n, a, b) {
for(let i =0; i<n; i++) {
    if(a[i] !== b[i]) {
        return "No";
        }
    }
    return "Yes";
}

console.log(f(n,sortedA, sortedB));

