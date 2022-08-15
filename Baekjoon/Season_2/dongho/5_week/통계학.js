let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const merge = (start, mid, end) => {
  const tmp = [];
  let LIndex = start;
  let RIndex = mid + 1;
  let tmpIndex = start;
  while (LIndex <= mid && RIndex <= end) {
    if (input[LIndex] <= input[RIndex]) {
      tmp[tmpIndex++] = input[LIndex++];
    } else {
      tmp[tmpIndex++] = input[RIndex++];
    }
  }

  while (LIndex <= mid) {
    tmp[tmpIndex++] = input[LIndex++];
  }
  while (RIndex <= end) {
    tmp[tmpIndex++] = input[RIndex++];
  }
  for (let i = start; i <= end; i++) {
    input[i] = tmp[i];
  }
};

const mergeSort = (start, end) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, mid, end);
  }
};

const getAverage = () => {
  const sum = input.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber
  );
  const average = Math.round(sum / N);
  // (0 + 0 + (-1)) / 3 = -0.333333... 이고 이를 첫째 자리에서 반올림하면 0이다. -0으로 출력하면 안된다.
  return average === -0 ? 0 : average;
};

const getMidValue = () => {
  return input[Math.floor(N / 2)];
};

const getMode = () => {
  //https://curryyou.tistory.com/229

  // 출연 빈도 구하기 ({요소: 개수})
  const object = input.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});

  const modeNum = Math.max.apply(null, Object.values(object)); // 최빈값 최대 개수 구하기

  // 최빈값(들) 구하기
  let modes = [];
  for (let key in object) {
    if (object[key] === modeNum) {
      modes.push(+key);
    }
  }

  modes.sort((a, b) => a - b);

  // 최빈값 출력
  return modes.length === 1 ? modes[0] : modes[1];
};

const getRange = () => {
  return input[N - 1] - input[0];
};

const N = input.shift();
mergeSort(0, N - 1);
console.log(getAverage()); // 산술평균
console.log(getMidValue()); // 중앙값
console.log(getMode()); // 최빈값
console.log(getRange()); // 범위
