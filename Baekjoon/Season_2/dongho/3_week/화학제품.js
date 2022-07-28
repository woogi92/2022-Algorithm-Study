let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

const T = +input.shift();

for (let i = 0; i < T; i++) {
  const products = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const prices = input
    .shift()
    .split(" ")
    .map((x) => +x);
}
