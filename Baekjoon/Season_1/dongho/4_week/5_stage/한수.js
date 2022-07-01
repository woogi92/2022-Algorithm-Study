let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString();

const number = Number(input);
let count = 0;

function checkExpression(numberArr) {
  const numberLen = numberArr.length;
  const tolerance = numberArr[0] - numberArr[1];
  const differenceNum = numberArr[1] - numberArr[2];
  // 차이값이 다를 경우 false를 반환, 공차가 존재하면 true를 반환
  if (differenceNum !== tolerance) {
    return false;
  }
  return true;
}

for (let i = 1; i <= number; i++) {
  // 숫자가 99보다 작을 경우, count값 증가 후 반복문 continue
  if (i <= 99) {
    count++;
    continue;
  }
  // 각 자리 숫자를 배열에 저장
  const numberArr = String(i)
    .split("")
    .map((number) => Number(number));
  // 등차수열이 맞으면 count값 증가
  if (checkExpression(numberArr)) {
    count++;
  }
}

// 최종값 출력
console.log(count);
