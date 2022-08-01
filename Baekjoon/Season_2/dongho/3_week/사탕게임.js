let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

const checkRow = (boards, i, j) => {
  for (let i = 0; i < N; i++) {
    let count = 1;
    for (let j = 0; j < N - 1; j++) {
      if (boards[i][j] === boards[i][j + 1]) {
        count++;
        if (count > maxLength) {
          maxLength = count;
        }
      } else {
        count = 1;
      }
    }
  }
};

const checkColumn = (boards, i, j) => {
  for (let j = 0; j < N; j++) {
    let count = 1;
    for (let i = 0; i < N - 1; i++) {
      if (boards[i][j] === boards[i + 1][j]) {
        count++;
        if (count > maxLength) {
          maxLength = count;
        }
      } else {
        count = 1;
      }
    }
  }
};

const checkContinuity = (boards, type, i, j) => {
  const tmpBoards = boards.map((candy) => candy.slice()); // 2차원 배열 복사
  const tmpCandy = tmpBoards[i][j];
  // 행 캔디 바꾸기
  if (type === "row") {
    tmpBoards[i][j] = tmpBoards[i][j + 1];
    tmpBoards[i][j + 1] = tmpCandy;
  }
  // 열 캔디 바꾸기
  if (type === "column") {
    tmpBoards[i][j] = tmpBoards[i + 1][j];
    tmpBoards[i + 1][j] = tmpCandy;
  }
  // 행열 탐색 후 사탕 최대 개수 찾기
  checkRow(tmpBoards, i, j);
  checkColumn(tmpBoards, i, j);
};

const N = +input.shift();
const inputBoards = [...input];
let boards = [];
for (let i = 0; i < N; i++) {
  const tmp = inputBoards[i].split("");
  boards.push(tmp);
}
let maxLength = 1;

// 행 탐색
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - 1; j++) {
    checkContinuity(boards, "row", i, j);
  }
}

// 열 탐색
for (let j = 0; j < N; j++) {
  for (let i = 0; i < N - 1; i++) {
    checkContinuity(boards, "column", i, j);
  }
}

console.log(maxLength);

//https://intrepidgeeks.com/tutorial/copy-onedimensional-and-twodimensional-arrays
