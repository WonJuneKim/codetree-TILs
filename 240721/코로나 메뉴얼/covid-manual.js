const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let info1 = input[0].split(" ");
let info2 = input[1].split(" ");
let info3 = input[2].split(" ");

let cold1 = info1[0];
let cold2 = info2[0];
let cold3 = info3[0];
let temp1 = Number(info1[1]);
let temp2 = Number(info2[1]);
let temp3 = Number(info3[1]);

if(cold1==="Y" && temp1>=37){
    if((cold2==="Y" && temp2>=37) || (cold3==="Y" && temp3>=37)) {
        console.log("E");
    } else {
        console.log("N");
    }
} else{
   if((cold2==="Y" && temp2>=37) && (cold3==="Y" && temp3>=37)) {
    console.log("E");
   } else {
    console.log("N");
   }
}