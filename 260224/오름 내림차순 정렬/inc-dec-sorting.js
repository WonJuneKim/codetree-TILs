const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

function cmp1(prev, cur) {
    return prev-cur;
}

console.log(nums.sort(cmp1).join(" "));

function cmp2(prev, cur) {
    return cur-prev;
}

console.log(nums.sort(cmp2).join(" "));