/*
let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);
*/

const readline = require("readline");

const merge = (array, start, mid, end) => {
  let LIndex = start;
  let RIndex = mid + 1;
  let tmpIndex = start;

  // 분할 정렬된 list의 합병
  while (LIndex <= mid && RIndex <= end) {
    if (array[LIndex] <= array[RIndex]) {
      tmpArray[tmpIndex++] = array[LIndex++];
    } else {
      tmpArray[tmpIndex++] = array[RIndex++];
    }
  }

  // 좌측 배열 남아 있는 값들 일괄 복사
  if (LIndex > mid) {
    for (let i = RIndex; i <= end; i++) {
      tmpArray[tmpIndex++] = array[i];
    }
  }
  // 우측 배열 남아 있는 값들 일괄 복사
  else {
    for (let i = LIndex; i <= mid; i++) {
      tmpArray[tmpIndex++] = array[i];
    }
  }
  // 임시 배열을 원본 배열로 재복사
  for (let i = start; i <= end; i++) {
    array[i] = tmpArray[i];
  }
};

const mergeSort = (array, start, end) => {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);
  // 중앙을 기준으로 2개의 그룹으로 분할
  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);
  // 정렬 후 병합
  merge(array, start, mid, end);
  return array;
};

const input = () => {
  let N = 0;
  let cnt = 0;
  const lines = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    if (!N) N = +line;
    else {
      lines.push(+line);
      cnt += 1;
      if (cnt === N) {
        const array = mergeSort(lines, 0, N - 1);
        console.log(array.join("\n"));
      }
    }
  }).on("close", () => process.exit());
};

const tmpArray = []; // 임시로 값들을 저장할 배열 (전역 변수)
input();

// 실패이유? =>  재귀 최대 깊이를 뛰어넘어서?

// https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html
// https://www.acmicpc.net/board/view/31887
