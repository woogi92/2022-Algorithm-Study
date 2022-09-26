/*
1. 
*/

const [input, ...players] = require("fs")
  .readFileSync(
    "/Users/User/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [W, H, X, Y, P] = input.split(" ").map((x) => +x);
let count = 0;
let W_small, H_small;
players.forEach((player) => {
  const [x, y] = player.split(" ").map((x) => +x);
  if (x >= X && x <= X + W && y >= Y && y <= Y + H) {
    count++;
  }
  W_small = x < X ? x - X : x - (x + W);
  H_small = abs(H / 2 - y);
});
