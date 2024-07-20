const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr1 = input[0].split(" ");
let arr2 = input[1].split(" ");

let mathA = Number(arr1[0]);
let engA = Number(arr1[1]);
let mathB = Number(arr2[0]);
let engB = Number(arr2[1]);

if(mathA > mathB){
    console.log("A");
} else if (mathA < mathB) {
    console.log("B");
} else if (engA < engB) {
    console.log("B");
} else {
    console.log("A");
}