const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

const OFFSET = 100000;
const SIZE = OFFSET * 2 + 1;

// const left = Array(SIZE).fill(0);
// const right = Array(SIZE).fill(0);
let k = Array(SIZE).fill(0);

let cur = OFFSET;

for(let i = 0; i<n; i++) {
    let [x, a] = commands[i].split(" ");
    x = Number(x);

    if(a ==="R") {
        while(x>0) {
            k[cur] =1;
            x-= 1;

            if(x) cur +=1;
        }
    } else {
        while(x>0) {
            k[cur] =2;
            x-=1;

            if(x) cur -=1;
        }
    }
}

let w=0, b = 0;

for(let i =0; i<SIZE; i++) {
    if(k[i] ===1) {
        b++;
    } else if (k[i] ===2) {
        w++;
    }
}

console.log(w,b);