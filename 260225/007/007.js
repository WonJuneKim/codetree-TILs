const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');

class Example {
    constructor(code, place, time) {
        this.code = code;
        this.place = place;
        this.time = time;
    }
}

const example1 = new Example(s_code, m_point, time);

console.log("secret code : " + example1.code);
console.log("meeting point : " + example1.place);
console.log("time : " + example1.time);