let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString();

// X가 3의 배수인지 체크하는 함수
const checkMultiple = (X) => {
  if (X % 3 === 0) {
    return "YES";
  }
  return "NO";
};

// X 변환 함수
const processMultiple = (X) => {
  // 재귀 함수 종료 조건
  if (X < 10) {
    return [count, checkMultiple(X)];
  }
  let total = 0; // 덧셈 총합
  // 자연수 X 각 자릿수를 더한다.
  for (let i = 0; i < X.length; i++) {
    total += Number(X[i]); // X가 String형이므로 Int형으로 변환 후 덧셈
  }
  count++; // 변환 횟수 증가
  return processMultiple(String(total)); // 재귀함수에 인자를 전달하기 전 total 변수가 Int형이므로 String으로 변환
};

let count = 0; // 변환 횟수
const output = processMultiple(input);
console.log(output[0]);
console.log(output[1]);
