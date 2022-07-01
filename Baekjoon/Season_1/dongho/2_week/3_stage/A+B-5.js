let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .split("\n");

let i = 0;
while (Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]) !== 0) {
  let sum = Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]);
  console.log(sum);
  i += 1;
}

// 다른 사람이 작성한 코드

var i = 0;
while (input[i]) {
  var arr = input[i].split(" ");
  var a = parseInt(arr[0]);
  var b = parseInt(arr[1]);
  if (a + b !== 0) {
    console.log(a + b);
    i++;
  }
}
