let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/dongho/input.txt"
  )
  .toString()
  .trim();

let seconds = 0; // 출력값

const dialNumArray = input.split(""); // 문자열 배열

// 다이얼 넘버 구하기
for (let i = 0; i < dialNumArray.length; i++) {
  const str = dialNumArray[i];
  let dialNum;
  // 예외값들
  if (str === "S") {
    dialNum = 7;
  } else if (str === "V") {
    dialNum = 8;
  } else if (str === "Y" || str === "Z") {
    dialNum = 9;
  } else {
    dialNum = Math.floor((str.charCodeAt(str) - 65) / 3) + 2;
  }
  dialNumArray[i] = dialNum;
}

// 시간 초 구하기
dialNumArray.forEach((second) => {
  seconds += second + 1;
});

console.log(seconds);
