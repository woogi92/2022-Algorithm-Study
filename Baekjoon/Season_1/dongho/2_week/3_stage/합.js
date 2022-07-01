let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString();

let num = parseInt(input);
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}

console.log(sum);
