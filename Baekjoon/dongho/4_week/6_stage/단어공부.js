let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString();

const word = input.toLowerCase();
// 알파벳 a ~ z의 개수를 저장 할 배열을 0으로 채워준다.
const alphabetArr = new Array(26).fill(0);

for (let i = 0; i < word.length; i++) {
  alphabetArr[word.charCodeAt(i) - 97]++;
}

const maxCount = Math.max(...alphabetArr); // 빈도수가 높은 문자 수
const maxIndex = alphabetArr.indexOf(maxCount); // 빈도수가 가장 높은 수의 첫번째 인덱스

// 빈도수가 가장 높은 수의 첫번째와 마지막 인덱스가 같다면 유일한 문자
// 아니면 다른 문자가 있으므로 ?
if (maxIndex === alphabetArr.lastIndexOf(maxCount)) {
  console.log(String.fromCharCode(maxIndex + 65));
} else {
  console.log("?");
}

/*// 내가 처음 푼 코드
const capitalWord = input.toUpperCase();
const capitalWordArr = capitalWord.split("");
let ASCIIArr = [];
let countArr = [];
let highValue = 0;
let output;

capitalWordArr.forEach((alphabet) => {
  ASCIIArr.push(alphabet.charCodeAt(0));
});

for (let i = 65; i <= 90; i++) {
  const count = ASCIIArr.filter((alphabet) => alphabet === i);
  if (count.length !== 0) {
    countArr.push(count);
  }
}

countArr.forEach((element) => {
  if (element.length > highValue) {
    hightValue = element;
    output = element[0];
  }
});

if (countArr.filter((count) => count.length === highValue).length > 1) {
  console.log("?");
} else {
  console.log(String.fromCharCode(output));
}*/
