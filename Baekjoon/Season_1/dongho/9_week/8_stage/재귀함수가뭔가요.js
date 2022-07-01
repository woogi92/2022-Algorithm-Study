let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input/input.txt"
  )
  .toString();

const question = `"재귀함수가 뭔가요?"\n`;
const answer1 = [
  `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n`,
  `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n`,
  `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n`,
].reverse();
const answer2 = `"재귀함수는 자기 자신을 호출하는 함수라네"\n`;
const answer3 = `라고 답변하였지.\n`;
let space = "____";
let output = "";
let checkFirst = true;

const printChat = (number) => {
  if (number < 0) {
    return;
  }
  if (checkFirst) {
    output += space.repeat(number) + question;
    output += space.repeat(number) + answer2;
    output += space.repeat(number) + answer3;
    checkFirst = false;
  } else {
    answer1.forEach((answer) => {
      output = space.repeat(number) + answer + output;
    });
    output = space.repeat(number) + question + output;
    output += space.repeat(number) + answer3;
  }
  printChat(number - 1);
};

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
printChat(+input);
console.log(output.trim());
