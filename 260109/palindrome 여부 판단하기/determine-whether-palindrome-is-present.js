const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];

function checkPalindrome(value) {
   let left =0;
   let right = value.length-1;

   while(left<right) {
    if(value[left] !== value[right]) {
        return "No";
    }
    left +=1;
    right -=1;
   }
   return "Yes";
}

console.log(checkPalindrome(str));

