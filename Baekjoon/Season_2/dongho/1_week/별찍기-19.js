let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString();

const lines = [];

const drawstar = (i, j, start, end) => {
  if (start > end) {
    lines.push("*");
  } else if (i === start || j === start || i === end || j === end) {
    if (i >= start && i <= end && j >= start && j <= end) {
      lines.push(" ");
    } else {
      lines.push("*");
    }
  } else {
    drawstar(i, j, start + 2, end - 2);
  }
};

const createSpace = (num) => {
  const size = 4 * (num - 1);
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
      drawstar(i, j, 1, size - 1);
    }
    lines.push("\n");
  }
};

createSpace(+input);
console.log(lines.join("").trim());
