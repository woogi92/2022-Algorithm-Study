let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .trim()
  .split(" ");

if (input[0] === "") {
  input.pop();
}

console.log(input.length);
