const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [text, pattern] = input;

//일치하는 문자열인지

function isSubstr(startIdx) {
    let [n, m] = [text.lemgth, pattern.length];

    if(startIdx+ m -1 >=n) {
        return false;
    }

    for(let j = 0; j<m; j++) {
        if(text[startIdx+j] !== pattern[j]) {
            return false;
        }
    }

    return true;
}

function findIndex() {
    let n = text.length;
    for(let i =0; i<n; i++) {
        if(isSubstr(i)) {
            return i;
        }
    }

    return -1;

}

console.log(findIndex());