let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString();

const lines = [];

const drawstar = (i, j, num) => {
  if (i % 2 === 0 || j % 2 === 0) {
    lines.push("*");
  } else {
    lines.push(" ");
  }
};

const createSpace = (num) => {
  const size = 4 * (num - 1);
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
      drawstar(i, j, size);
    }
    lines.push("\n");
  }
};

createSpace(+input);
console.log(lines);
//console.log(lines.join("").trim());
