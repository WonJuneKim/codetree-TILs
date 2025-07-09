const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let studentCount = Number(input[0]);


let sum = 0;
let cnt = 0;

//학생 반복
for(let i =0; i<studentCount; i++) {
     sum =0;
     //2번째 줄 부터 각 줄에 대한 점수 반복
     for(let j = 0; j<4; j++) {
          let score = input[i+1].split(" ").map(Number);
          sum += score[j];
     }
     if ((sum/4)>=60) {
          console.log("pass");
          cnt++;
     } else {
          console.log("fail");
     }
}

console.log(cnt);



// score 는 2번째부터 ~ 마지막까지 input을 " "로 쪼갠거.