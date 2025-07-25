const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

//a개, b개의 원소를 가짐
let [a, b] = input[0].split(" ").map(Number);

let firstArr = input[1].split(" ").map(Number);
let secondArr = input[2].split(" ").map(Number);

// 맨 처음 수를 비교해서 주르륵 일치하는지 확인

let found = false;


for (let i = 0; i<a-b; i++) {
    let isMatch = true;

    for (let j = 0; j<b; j++) {
        if(firstArr[i+j] !== secondArr[j]) {
            isMatch = false;
            break;
        }
    }
    if(isMatch) {
        found = true;
        break;
    }
}

console.log(found ? "Yes" : "No");


