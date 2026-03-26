const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));


let i =0, j=0;
let [speedA, timeA] = aData[i];
let [speedB, timeB] = bData[j];

let posA = 0, posB = 0;
// 0은 공동, A가 앞서면 1, B가 앞서면 -1
let leader = 0; 
let changeCount = 0;

while(true) {
    posA += speedA;
    posB += speedB;

    let current = 0;
    if(posA > posB) current = 1;
    else if(posB > posA) current = -1;

    if(current!=0 && leader !==0 && current !== leader){
        changeCount++;
    }

    if(current !==0) {
        leader = current;
    }

    timeA--;
    timeB--;

    if(timeA ===0 ) {
        i++;
        if(i<n) {
            [speedA, timeA] = aData[i];
        } else{
            speedA = 0;
            timeA = Infinity;
        }
    }

    if(timeB ===0) {
        j++;
        if(j<m) {
            [speedB, timeB] = bData[j];
        } else{
            speedB =0;
            timeB = Infinity;
        }
    }

    if(speedA ===0 && speedB ===0) break;
}

console.log(changeCount);