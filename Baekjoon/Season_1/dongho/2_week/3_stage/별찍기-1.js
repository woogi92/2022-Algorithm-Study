let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString();

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
