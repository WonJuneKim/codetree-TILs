const fs =require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let end = n;
let result = "";

while (end > 0) {
    let maxVal = arr[0];
    let idx = 0;

    for(let i = 0; i<end; i++) {


        if (maxVal < arr[i]) {
            maxVal = arr[i];
            idx = i;
        }
    }

    result += (idx+1) + " ";    

    end = idx;

}

console.log(result);