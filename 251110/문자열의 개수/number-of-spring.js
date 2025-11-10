const fs= require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let i = 0;
let cnt = 0;
let arr = [];

while(input[i] !=='0') {
    if((i%2)===0) {
        arr.push(input[i]);
    }
    i++;
    cnt++;

}

console.log(cnt);

for(let j = 0; j<arr.length; j++) {
    console.log(arr[j]);
}