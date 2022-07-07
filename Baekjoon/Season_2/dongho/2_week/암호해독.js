let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n");

const stringToASCII = (string) => {
  const stringArray = string.split("").map((char) => char.charCodeAt(0) - 97);
  return stringArray;
};

const shiftASCII = (ASCII) => {
  ASCII = ASCII.map((x) => ++x);
  for (let i = 0; i < ASCII.length; i++) {
    if (ASCII[i] === 26) {
      ASCII[i] = 0;
    }
  }
  return ASCII;
};

const isInclude = (word) => {
  if (password.join(" ").includes(word.join(" "))) {
    return true;
  }
  return false;
};

const ASCIItoString = (ASCII) => {
  ASCII = ASCII.map((code) => String.fromCharCode(String(code + 97)));
  return ASCII.join("").trim();
};

let password = stringToASCII(input[0]); // 암호문
const N = +input[1]; // 사전에 있는 단어의 수
let words = []; // 단어들
let isFind = false; // 단어가 존재하는지 여부
// 단어 저장
for (let i = 2; i < N + 2; i++) {
  words.push(stringToASCII(input[i]));
}

// 단어를 찾을 때까지 무한 반복
while (1) {
  // 암호문과 단어 비교
  for (let i = 0; i < N; i++) {
    if (isInclude(words[i])) {
      isFind = true;
      break;
    }
  }
  // 단어를 찾았을 경우 반복문 탈출
  if (isFind) {
    break;
  }
  // 단어를 못 찾았을 경우 알파벳 칸 변경
  password = shiftASCII(password);
}

const output = ASCIItoString(password);
console.log(output);
