let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  let score = 0;
  let totalScore = 0;
  const strArr = input[i].split("");
  strArr.forEach((item) => {
    if (item === "X") {
      score = 0;
    } else {
      score++;
    }
    totalScore += score;
  });
  console.log(totalScore);
}
