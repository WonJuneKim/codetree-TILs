const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

nums.sort((a,b)=>a-b);

//n개의 그룹이 발생

function f(arr) {
    let maxVal = 0;
    const len = arr.length;
    for(let i =0; i<len/2; i++) {
        if(arr[i] + arr[len-1-i] >maxVal) {
            maxVal = arr[i] + arr[len-1-i];
        }
    }
    return maxVal;
}

console.log(f(nums));