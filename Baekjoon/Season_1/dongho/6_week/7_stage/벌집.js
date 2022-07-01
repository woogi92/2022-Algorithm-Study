let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString();

// 내가 푼 코드
let i = 0;
let j = 1;
input -= 1;
while (1) {
  if (input <= 6 * i) {
    console.log(j);
    break;
  }
  i += j;
  j++;
}

// 다른 사람이 푼 코드
/*
const input = require("fs").readFileSync("/dev/stdin");

let range = 1,
  block = 1;

while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);
*/
