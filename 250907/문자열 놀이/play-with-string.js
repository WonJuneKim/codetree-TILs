const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let s = input[0].split(" ")[0];
let q = Number(input[0].split(" ")[1]);

for(let i = 1; i<=q; i++) {
    let arr = input[i].split(" ");

    if(arr[0] === "1") {
        let a = Number(arr[1])-1;
        let b = Number(arr[2])-1;
        let ans = "";

        for(let j = 0; j<s.length; j++) {
            if(j===a) {
                ans+= s[b];
            } else if (j===b) {
                ans+= s[a];
            } else {
                ans += s[j];
            }
            
        }
        s= ans;
        console.log(ans);

    } else {
        let x = arr[1];
        let y = arr[2];
        let ans = "";

        for(let j=0; j<s.length; j++) {
            if(s[j]===x) {
                ans+=y;
            } else {
                ans+=s[j];
            }
        }
        s=ans;
        console.log(ans);
        
    }
}