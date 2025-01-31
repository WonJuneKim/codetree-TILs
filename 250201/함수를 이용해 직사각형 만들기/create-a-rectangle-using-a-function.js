const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let n = input[0];
let m = input[1];

function rectangle(n, m) {
    for(i=0; i<n; i++) {
        let str = "";
        for (let j =0; j<m; j++){
            str += "1";
        }
        console.log(str);
    }
}

rectangle(n,m);