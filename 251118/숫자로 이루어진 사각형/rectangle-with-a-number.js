const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

let cnt = 1;

function printRect(n) {
    for(let i =0; i<n; i++) {
        for(let j = 0; j<n; j++) {
            if(cnt === 10) {
                cnt = 1;
            }
            process.stdout.write(cnt+" ");
            cnt++;
        }
        process.stdout.write("\n");
    }
}

printRect(N);