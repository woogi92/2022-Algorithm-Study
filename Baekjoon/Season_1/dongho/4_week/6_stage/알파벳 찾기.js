let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .trim();

const word = input.split(""); // 단어(문자열)를 문자열 배열로 변환
const wordLen = word.length; // 문자열 배열의 길이를 저장
// 알파벳(a-z)을 저장하는 배열
const alphabetDB = "abcdefghijklmnopqrstuvwxyz".split("");
const alphabetDBLen = alphabetDB.length; // 알파벳 배열의 길이를 저장
let output = ""; // 출력값을 저장하는 변수

// 알파벳(a-z)을 돌리는 for문
for (let i = 0; i < alphabetDBLen; i++) {
  let exist = false; // 알파벳이 존재하는지 확인하는 bool변수
  // 단어 부분을 돌리는 for문
  for (let j = 0; j < wordLen; j++) {
    // 단어의 알파벳과 알파벳 DB의 알파벳이 같을 경우 해당 알파벳 인덱스값 출력 후 break
    if (word[j] === alphabetDB[i]) {
      exist = true;
      output += `${j} `;
      break;
    }
  }
  // 만약 알파벳이 없을 경우 -1을 출력
  if (exist === false) {
    output += "-1 ";
  }
}

// 출력값 마지막에 띄어쓰기가 들어가므로 trim()함수를 이용해 공백문자 제거
console.log(output.trim());

//////////////////////////////
// 다른 사람이 푼 코드
/*
const input = require("fs").readFileSync("/dev/stdin").toString();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));
*/
