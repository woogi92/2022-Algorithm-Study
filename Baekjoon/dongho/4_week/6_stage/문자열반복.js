let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

const testCaseNum = Number(input[0]); // 테스트케이스 개수
let output = ""; // 출력값을 저장하는 변수

for (let i = 1; i <= testCaseNum; i++) {
  const testCase = input[i].split(" "); // 테스트케이스를 배열로 변환
  const repeat = Number(testCase[0]); // 테스트케이스 반복 횟수
  const alphanumeric = testCase[1]; // 문자열을 저장하는 변수
  const alphanumericArr = alphanumeric.split(""); // 문자열을 배열로 변환
  const alphanumericArrLen = alphanumericArr.length; // 문자열 배열의 길이
  // 문자열 배열에서 알파벳을 하나씩 뽑아내서 repeat 변수만큼 반복해서 ouput에 저장
  for (let j = 0; j < alphanumericArrLen; j++) {
    output += alphanumericArr[j].repeat(repeat);
  }
  output += "\n";
}

console.log(output.trim());
