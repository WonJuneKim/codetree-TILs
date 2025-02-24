const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n1, n2] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

function isContiguousSubsequence(A, B) {
  for (let i = 0; i <= A.length - B.length; i++) {
    let match = true;
    for (let j = 0; j < B.length; j++) {
      if (A[i + j] !== B[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return "Yes";
    }
  }
  return "No";
}

console.log(isContiguousSubsequence(A,B));