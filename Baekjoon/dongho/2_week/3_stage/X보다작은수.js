let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

const arrayLen = input[0].split(" ")[0];
const x = input[0].split(" ")[1];
const array = input[1].split(" ");

for (let i = 0; i < arrayLen; i++) {
  if (Number(array[i]) < x) {
    process.stdout.write(`${array[i]} `);
  }
}
