let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString()
  .split(" ");

const A = input[0];
const B = input[1];
const V = input[2];

console.log(Math.ceil((V - B) / (A - B)));
