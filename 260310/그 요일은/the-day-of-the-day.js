const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

//m2, d2가 m1,d1 보다 앞서지는 않는다.



//~까지 일 수 더하기
function numOfDays(m,d) {
    const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let total = 0;

    for(let i =1; i<m; i++) {
        total += days[i];
    }

    return total + d;
}

let targetDay = numOfDays(m2,d2);
let startDay = numOfDays(m1,d1);

let diff = ((targetDay - startDay) %7 +7) %7;

// startDay가 월요일

const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


if(day[diff] === A) {
    console.log(Math.floor((targetDay-startDay)/7) +1);
} else {
    console.log(Math.floor((targetDay-startDay)/7));
}
