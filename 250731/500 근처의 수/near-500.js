const fs =require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let maxArr = [];
let minArr = [];

for(let i = 0; i<input.length; i++) {
    if(input[i] <500) {
        maxArr.push(input[i]);
    } else if (input[i] >500) {
        minArr.push(input[i]);
    }
}

//max는 500미만 애들
//min은 500 초과 애들

let maxVal = maxArr[0];
let minVal = minArr[0];

for (let i = 0; i<maxArr.length; i++) {
    if (maxVal <maxArr[i]) {
        maxVal = maxArr[i];
    }
}

for (let i = 0; i<minArr.length; i++) {
    if (minVal > minArr[i]) {
        minVal = minArr[i];
    }
}

console.log(maxVal, minVal);