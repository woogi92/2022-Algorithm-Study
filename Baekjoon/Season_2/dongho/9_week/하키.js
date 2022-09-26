/*
1. 
*/

const [input, ...players] = require("fs")
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [W, H, X, Y, P] = input.split(" ").map((x) => +x);
const R = H / 2; // 원의 반지름
let count = 0; // 선수의 수
let W_small, H_small; // 반원 구간 Width, Height
players.forEach((player) => {
  const [x, y] = player.split(" ").map((x) => +x);
  // 직사각형 범위 안에 있는지 확인
  if (x >= X && x <= X + W && y >= Y && y <= Y + H) {
    count++;
    // 그게 아니라면 반원 구간 안에 있는지 확인
  } else {
    W_small = x < X ? x - X : x - (X + W);
    H_small = Y + R - y;
    R_small = Math.sqrt(W_small ** 2 + H_small ** 2);
    if (R >= R_small) {
      count++;
    }
  }
});

console.log(count);
