let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString();

let answer = "";
for (let i = input; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);

/* 다른 사람이 푼 코드
let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());

let num = ''

for(let i=input; i>=1; i--){
    num += i + '\n';
}

console.log(num)
*/
