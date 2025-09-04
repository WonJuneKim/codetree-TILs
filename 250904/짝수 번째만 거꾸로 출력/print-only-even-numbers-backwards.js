const fs =require("fs");
let str = fs.readFileSync(0).toString().trim();

let len =str.length;
let ans = "";

if(len%2 !== 0) {
    len = len-1;
}

for(let i =len-1; i>=0; i-=2) {
    ans +=str[i];
}

console.log(ans);