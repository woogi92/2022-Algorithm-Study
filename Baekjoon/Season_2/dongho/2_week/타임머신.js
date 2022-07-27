let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString();

const checkInclude = (num, min, max) => {
  return num >= min && num <= max;
};

const time = input.split(":").map((x) => +x); // 입력값을 변환하여 배열에 저장 (ex. 01:01:59 -> [1, 1, 59])
let count = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      if (i !== j && j !== k && k !== i) {
        if (
          checkInclude(time[i], 1, 12) &&
          checkInclude(time[j], 0, 59) &&
          checkInclude(time[k], 0, 59)
        ) {
          count++;
        }
      }
    }
  }
}

console.log(count);
