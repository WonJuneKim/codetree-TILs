const fs =require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let n = input[0];
let m = input[1];

function GCD(n,m) {
    while(m!==0){
        let temp=m;
        m = n%m;
        n =temp;
    }
    return n;
}

function LCM(n,m) {
    console.log((n*m) / GCD(n,m));
}

LCM(n,m);