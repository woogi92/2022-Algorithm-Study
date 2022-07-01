let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString();

let num = parseInt(input);

for (let i = 1; i <= num; i++) {
  for (let j = num - i; j > 0; j--) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= i; k++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
