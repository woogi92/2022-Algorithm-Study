let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

const numbers = input.map((x) => Number(x));
let index = 1;
let maxIndex = 1;

let max = numbers[0];
for (number of numbers) {
  if (number > max) {
    max = number;
    maxIndex = index;
  }
  index++;
}

console.log(max);
console.log(maxIndex);
