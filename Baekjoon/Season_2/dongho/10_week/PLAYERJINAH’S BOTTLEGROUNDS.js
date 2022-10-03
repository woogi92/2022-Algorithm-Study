const [...input] = require("fs")
  .readFileSync(
    "/Users/User/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const players = []; // 플레이어들의 좌표를 저장하는 배열
input.forEach((player) => {
  const [x, y] = player.split(" ").map((x) => +x);
  players.push([x, y]);
});

const slope_1 =
  (players[1][0] - players[0][0]) / (players[1][1] - players[0][1]);
const slope_2 =
  (players[2][0] - players[1][0]) / (players[2][1] - players[1][1]);

console.log(
  slope_1 !== slope_2 ? "WINNER WINNER CHICKEN DINNER!" : "WHERE IS MY CHICKEN?"
);
