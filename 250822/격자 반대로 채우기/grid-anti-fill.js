const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

//맨 우측을 기준으로 홀수번째 열의 경우 아래에서 위
// 짝수번째 열의 경우 위에서 아래

let arr2d = Array(n).fill(0).map(()=>Array(n).fill(0));

//n*n 정사각형이니까 n이 홀수 일 때 짝수 일 때 나눠서 생각하자
let num = 1;

for(let col = n-1; col>=0; col--) {
  if(n%2 !==0) {
    if(col%2 ===0) {
      for(let row =n-1; row>=0; row--) {
      arr2d[row][col] = num++;
      }
    } else {
      for(let row = 0; row<n; row++) {
        arr2d[row][col] = num++;
      }
    }
  } else {
        if(col%2 ===0) {
      for(let row = 0; row<n; row++) {
      arr2d[row][col] = num++;
      }
    } else {
      for(let row =n-1; row>=0; row--) {
        arr2d[row][col] = num++;
      }
    }
    
  }
}

for(let row = 0; row<n; row++) {
  console.log(arr2d[row].join(" "));
}