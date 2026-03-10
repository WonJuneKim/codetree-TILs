const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1].split("").map(Number);

//n은 A진수, B진수로 변환
//10진수로 바꾸고 >> B진수로 재변환

let num = 0;
for(let i = 0; i< n.length; i++) {
    num = num * a + n[i];
}

let digits = [];
while (true) {
    if(num <b) {
        digits.push(num);
        break;
    }

    digits.push(num %b);
    num = Math.floor(num/b);
}

console.log(digits.reverse().join(""));