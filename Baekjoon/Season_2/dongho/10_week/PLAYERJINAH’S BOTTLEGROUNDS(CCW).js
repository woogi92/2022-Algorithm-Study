const [...input] = require("fs")
  .readFileSync(
    "/Users/User/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const ccw = (x1, y1, x2, y2, x3, y3) => {
  let ret = x1 * y2 + x2 * y3 + x3 * y1;
  ret -= y1 * x2 + y2 * x3 + y3 * x1;
  return ret;
};

const players = []; // 플레이어들의 좌표를 저장하는 배열
input.forEach((player) => {
  const [x, y] = player.split(" ").map((x) => +x);
  players.push(x, y);
});

// ccw 알고리즘 사용
console.log(
  ccw(...players) === 0
    ? "WHERE IS MY CHICKEN?"
    : "WINNER WINNER CHICKEN DINNER!"
);
