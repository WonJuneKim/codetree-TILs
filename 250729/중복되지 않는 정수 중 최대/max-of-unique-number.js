const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

//중복되는지 한번 더 체크??


let maxNum = -1;

for (let elem of arr) {
    if (maxNum < elem) {
        let count = 0;

        for(let elem2 of arr) {
            if(elem2 === elem) {
                count+=1;
            }
        }

        if(count ===1) {
            maxNum = elem;
        }
    }
}

console.log(maxNum);