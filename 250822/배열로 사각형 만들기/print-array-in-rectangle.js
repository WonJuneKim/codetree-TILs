let arr2d = Array(5).fill(0).map(()=>Array(5).fill(0));

for(let row = 0; row<5; row++) {
    arr2d[row][0] =1;
}

for(let col = 0; col<5; col++) {
    arr2d[0][col] =1;
}

for (let row = 1; row<5; row++) {
    for(let col = 1; col<5; col++) {
        arr2d[row][col] = arr2d[row-1][col] + arr2d[row][col-1];
    }
}

for (let row = 0; row<5; row++) {
    console.log(arr2d[row].join(" "));
}