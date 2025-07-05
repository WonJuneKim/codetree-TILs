const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);


let resultArr = [];
let sumVal =0;

for (let elem of arr) {
    if(elem >= 250) break;
    resultArr.push(elem);
}

let n = resultArr.length;

for (let i = 0; i < n; i++) {
    sumVal += resultArr[i];
}

let result = (sumVal/n).toFixed(1);

console.log(sumVal, result);


// 배열을 입력받는데, 배열은 항상 10개 고정이다.
// 배열을 탐색하면서 250 이상이면 out, 그렇지 않으면 정답 배열에 넣는다.