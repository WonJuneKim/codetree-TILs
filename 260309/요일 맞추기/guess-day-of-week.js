const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

//일단 일자의 차이를 구한다.

function numOfDays(m,d) {
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;

    for(let i =0; i<m; i++) {
        totalDays += days[i];
    }

    totalDays +=d;

    return totalDays;
}

const day1 = numOfDays(m1,d1);
const day2 = numOfDays(m2,d2);

const diff = ((day2 - day1) % 7 + 7) % 7;


const days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(days_of_week[diff]);