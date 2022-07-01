let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split(" ");

// 1. 문자열을 문자열 배열로 만든다. (split)
// 2. 문자열 배열을 뒤집는다. (reverse)
// 3. 문자열 배열을 다시 문자열로 만든다. (join)
// 4. 문자열을 Number형으로 변환한다. (Number)
for (let i = 0; i <= 1; i++) {
  input[i] = Number(input[i].split("").reverse().join(""));
}

// input 배열 안의 숫자 중 최댓값을 출력한다.
console.log(Math.max(...input));
