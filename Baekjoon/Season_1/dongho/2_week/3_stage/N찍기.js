let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString();

let answer = "";
for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);
