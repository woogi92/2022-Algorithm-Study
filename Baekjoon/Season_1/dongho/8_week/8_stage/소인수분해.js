let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString();

input = Number(input);
let number = 2;

while (input !== 1) {
  if (input % number === 0) {
    console.log(number);
    input /= number;
    number = 2;
  } else {
    number++;
  }
}
