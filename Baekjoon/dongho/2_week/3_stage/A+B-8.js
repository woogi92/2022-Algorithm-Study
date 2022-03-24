let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  let numArray = input[i].split(" ");
  let a = Number(numArray[0]);
  let b = Number(numArray[1]);

  answer += `Case #${i}: ${a} + ${b} = ${a + b} \n`;
}

console.log(answer);
