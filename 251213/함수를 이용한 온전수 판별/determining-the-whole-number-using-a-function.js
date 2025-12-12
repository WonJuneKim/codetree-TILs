const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

function isOnJunSue(number) {
    return OnJuneSueCondition(number);
}

function OnJuneSueCondition(number) {
    if(number%2 ===0) 
    return false;
    
    if(number%10 ===5)
    return false;

    if(number%3 ===0 && number%9 !==0)
    return false;

    return true;
}

let cnt = 0;

for(let i=a; i<=b; i++) {
    if(isOnJunSue(i)) 
    cnt++;
}

console.log(cnt);