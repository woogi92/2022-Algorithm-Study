let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  let number = input[i].split(" ");

  answer += `Case #${i}: ${Number(number[0]) + Number(number[1])} \n`;
}

console.log(answer);
