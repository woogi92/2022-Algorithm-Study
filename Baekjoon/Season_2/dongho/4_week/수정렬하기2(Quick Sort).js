let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const swapNumber = (array, index1, index2) => {
  const tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
};

const quickSort = (array, start, end) => {
  const pivot = array[Math.floor((start + end) / 2)];
  let LIndex = start;
  let RIndex = end;

  while (LIndex <= RIndex) {
    while (array[LIndex] < pivot) LIndex++;
    while (array[RIndex] > pivot) RIndex--;

    if (LIndex <= RIndex) {
      swapNumber(array, LIndex, RIndex);
      LIndex++;
      RIndex--;
    }
  }

  if (start < RIndex) quickSort(array, start, RIndex);
  if (end > LIndex) quickSort(array, LIndex, end);

  return array;
};

const N = input.shift();

const array = quickSort(input, 0, N - 1);
console.log(array.join("\n"));
