const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));


//M번 반복
for(let i = 0; i<m; i++) {
    console.log(querySum(queries[i][0], queries[i][1]));
}

//쿼리에서 a1, a2 값"을" 수열(문자열 arr) 합산

//a,b를 인수로 받아서 a = arr[0], b=arr[1]
function querySum(a,b) {
    let sum = 0;
    for(let i = a-1; i<b; i++) {
        sum += A[i];
    }
    return sum;
}
