let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

const N = +input.shift();
const inputBoards = [...input];
const boards = [];
for (let i = 0; i < N; i++) {
  const tmp = inputBoards[i].split("");
  boards.push(tmp);
}

const checkContinuity = (boards) => {};

// 행 순차탐색
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j + 1 === N) {
      break;
    }
    if (boards[i][j] === boards[i][j + 1]) {
      continue;
    }
    checkContinuity(boards);
  }
}

// 열 순차탐색
