let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString();

let num = parseInt(input);
let val = 0;

for (let i = 1; i <= num; i++) {
  val += i;
}

console.log(val);
