let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const merge = (array, start, mid, end) => {};

const mergeSort = (array, start, end) => {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);
  merge(array, start, mid, end);
};

const N = input.shift();

const array = mergeSort(input, 0, N - 1);
