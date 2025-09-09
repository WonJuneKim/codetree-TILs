const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0].split(" ")[0];
let q = Number(input[0].split(" ")[1]);

for (let i = 1; i<=q; i++) {
    if(Number(input[i]) ===1) {
        str = str.slice(1) + str[0];        

    }else if (Number(input[i])===2) {
        str = str.slice(-1) + str.slice(0,-1);

    } else {
        let temp = "";
        for(let j=str.length-1; j>=0; j--) {
            temp += str[j];
        }
        str = temp;

    }

    console.log(str);
}