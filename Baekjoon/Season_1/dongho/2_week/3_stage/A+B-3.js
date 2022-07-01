let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

const array = input;
const arrayLen = parseInt(input[0]);
for (let i = 1; i <= arrayLen; i++) {
  const a = parseInt(array[i].split(" ")[0]);
  const b = parseInt(array[i].split(" ")[1]);
  console.log(a + b);
}

/* 다른 사람이 짠 코드 => 내가 생각하는 이상적인 코드!!
for(let i = 1;i <= input[0]; i++) {
  let numbers = input[i].split(" ");

  console.log(Number(numbers[0]) + Number(numbers[1]));
}
*/
