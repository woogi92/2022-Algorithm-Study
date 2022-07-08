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

// 입력값으로 59보다 큰 수가 들어왔을 경우 count를 0으로 만들어버림 (이 조건문 안 넣어주면 백준에서 틀렸다고 뜸.. 삽질..삽질..)
if (time.filter((x) => x > 59).length > 0) {
  count = 0;
}
// 정상적인 입력값이 들어왔을 경우 (모든 수가 59이하 일 때)
else {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (i !== j && j !== k && k == i) {
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
}

console.log(count);
