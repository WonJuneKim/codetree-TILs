const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

function lcmTwo(a, b) {
  function find(k) {
    if ((a * k) % b === 0) return a * k;
    return find(k + 1);
  }
  return find(1);
}

function lcmArray(arr, index = 0) {
  if (index === arr.length - 1) return arr[index];
  return lcmTwo(arr[index], lcmArray(arr, index + 1));
}

console.log(lcmArray(numbers));