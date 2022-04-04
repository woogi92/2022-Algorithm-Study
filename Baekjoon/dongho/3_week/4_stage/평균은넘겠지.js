const { count } = require("console");
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  const scores = input[i].split(" ").map((e) => Number(e)); // scores 배열 생성하고 정수로 변환
  let totalScore = 0;
  let countPerson = 0;

  /* 평균값 구하기 */
  for (let j = 1; j <= scores[0]; j++) {
    totalScore += scores[j];
  }
  const avgScore = Math.floor(totalScore / scores[0]); // 학생 평균 점수 구하기 (소수점 버림)

  /* 평균 넘는 학생 수 구하기 */
  for (let k = 1; k <= scores[0]; k++) {
    if (scores[k] > avgScore) {
      countPerson++;
    }
  }

  let avgPercent = ((countPerson / scores[0]) * 100).toFixed(3); // 퍼센트 구하기 (소수점 세번째 자리까지)
  //avgPercent = Math.round(avgPercent * 10 ** 3) / 10 ** 3; // 퍼센트 소수점 셋째 자리까지 출력
  console.log(avgPercent + "%");
}
