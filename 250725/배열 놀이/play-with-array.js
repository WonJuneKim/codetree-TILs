const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, q] = input[0].split(" ").map(Number);
let nArray = input[1].split(" ").map(Number);

let found = false;

for(let i = 2; i<q+2; i++) {
    let [type, a, b] = input[i].split(" ").map(Number);

    if(type ===1) {
        console.log(nArray[a-1]);
    } else if (type ===2) {
        for(let i = 0; i < nArray.length; i++) {
            if(nArray[i] === a) {
                console.log(i+1);
                found = true;
                break;
            }
        }
        if(!found) console.log(0);
    } else {
        let s = a, e=b;
        let result = "";

        for(let j = s-1; j<e; j++) {
            result += nArray[j] + " ";
        }
        console.log(result);
    }

}