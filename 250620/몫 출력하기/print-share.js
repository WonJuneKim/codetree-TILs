const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
let count =0;

while (true) {

    if(count>=3) {
        break;
    }

    let number = Number(input[index]);
    index++;

    if((number%2)!==0) {
        continue;
    }


    if((number%2)===0) {
        console.log(number/2);
        count++;
    }

}