let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split(" ");
let hour = parseInt(input[0]);
let array = input[1].split("\n");
let min = parseInt(array[0]);
let left = parseInt(array[1]);

min += left;
hour += Math.floor(min / 60);
if (hour >= 24) {
  hour -= 24;
}
min %= 60;

console.log(hour, min);
