let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

const arrayLen = Number(input[0]);
let array = input[1].split(" ").map((item) => Number(item));
let max = array[0];
let min = array[0];

for (let i = 1; i < arrayLen; i++) {
  if (array[i] > max) {
    max = array[i];
  }
  if (array[i] < min) {
    min = array[i];
  }
}

console.log(min, max);

// 다른 방식

array.sort((a, b) => a - b);

console.log(array[0], array[arrayLen - 1]);
