let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split(" ");
let hour = parseInt(input[0]);
let min = parseInt(input[1]);

if (min >= 45) {
  min -= 45;
} else {
  if (hour === 0) {
    hour = 23;
  } else {
    hour -= 1;
  }
  min = 60 - (45 - min);
}

console.log(`${hour} ${min}`);
