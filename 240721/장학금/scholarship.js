const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let middle = Number(input[0]);
let final = Number(input[1]);

if(middle>=90) {
    if(final >=95){
        console.log(10);
    }
    else if (final >=90) {
        console.log(5);
    }
    else {
        console.log(0);
    }
} else{
    console.log(0);
}