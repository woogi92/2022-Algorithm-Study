const [x, y, w, h] = require("fs")
  .readFileSync(
    "/Users/User/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split(" ");

const abs = (num) => Math.abs(num);

console.log(Math.min(abs(x - w), abs(x - 0), abs(y - h), abs(y - 0)));
