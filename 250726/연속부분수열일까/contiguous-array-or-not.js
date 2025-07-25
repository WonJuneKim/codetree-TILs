const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

//a개, b개의 원소를 가짐
let [a, b] = input[0].split(" ").map(Number);

let firstArr = input[1].split(" ").map(Number);
let secondArr = input[2].split(" ").map(Number);

let testArr = [];

// 맨 처음 수를 비교해서 주르륵 일치하는지 확인

let idx = -1;

let valid = false;

for (let i = 0; i<a; i++) {
    if (secondArr[0] === firstArr[i]) {
        idx = i;
    }

    for (let j = idx; j<idx+b; j++) {
        testArr.push(firstArr[j]);
    }

    if(testArr === secondArr) {
        valid =true;
    }
}

if(valid) {
    console.log("Yes");
} else {
    console.log("No");
}

