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

let password = stringToASCII(input[0]);
const N = +input[1];
let words = [];
let isFind = false;
for (let i = 2; i < N + 2; i++) {
  words.push(stringToASCII(input[i]));
}
for (let i = 0; i < 26; i++) {
  for (let i = 0; i < N; i++) {
    if (isInclude(words[i])) {
      isFind = true;
      break;
    }
  }
  if (isFind) {
    break;
  }
  password = shiftASCII(password);
}

const output = ASCIItoString(password);
console.log(output);
