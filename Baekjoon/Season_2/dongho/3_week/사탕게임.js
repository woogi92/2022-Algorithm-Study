let fs = require("fs");
const { serialize } = require("v8");
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
let maxLength = 0;

const checkRow = (boards, i, j) => {
  let count = 1;
  for (let j = 0; j < N; j++) {
    if (j + 1 === N) break;
    if (boards[i][j] === boards[i][j + 1]) {
      count++;
      if (count > maxLength) {
        maxLength = count;
      }
    } else count = 1;
  }
};

const checkColumn = (boards, i, j) => {
  let count = 1;
  for (let i = 0; i < N; i++) {
    if (i + 1 === N) break;
    if (boards[i][j] === boards[i + 1][j]) {
      count++;
      if (count > maxLength) {
        maxLength = count;
      }
    } else count = 1;
  }
};

const checkContinuity = (boards, i, j) => {
  const tmpBoards = boards.map((candy) => candy.slice()); // 2차원 배열 복사
  const tmpCandy = tmpBoards[i][j];
  tmpBoards[i][j] = tmpBoards[i][j + 1];
  tmpBoards[i][j + 1] = tmpCandy;

  //행 탐색
  checkRow(tmpBoards, i, j);
  checkColumn(tmpBoards, i, j);
};

// 행 순차탐색
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j + 1 === N) break;
    checkContinuity(boards, i, j);
  }
}

console.log(maxLength);

// 열 순차탐색

//https://intrepidgeeks.com/tutorial/copy-onedimensional-and-twodimensional-arrays
