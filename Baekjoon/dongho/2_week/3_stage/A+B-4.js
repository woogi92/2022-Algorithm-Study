let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

let i = 0;
while (input[i]) {
  let number = input[i].split(" ");
  let a = Number(number[0]);
  let b = Number(number[1]);
  console.log(a + b);
  i++;
}
