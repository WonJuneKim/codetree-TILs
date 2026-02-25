const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}

//1. 문자열 T로 시작하는 단어 탐색

const dictionary = [];

for(let i = 0; i<words.length; i++) {
    if(words[i].startsWith(t)) {
        dictionary.push(words[i]);
    }
}

//2. dictionary를 사전순으로 정렬

dictionary.sort();

console.log(dictionary[k-1]);