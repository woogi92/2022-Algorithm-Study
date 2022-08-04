let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const quickSort = (array, start, end) => {
  const pivot = array[Math.floor((start + end) / 2)];
  let LIndex = start;
  let RIndex = end;

  while (LIndex <= RIndex) {
    while (array[LIndex] < pivot) LIndex++;
    while (array[RIndex] > pivot) RIndex--;

    if (LIndex <= RIndex) {
      const tmp = array[LIndex];
      array[LIndex] = array[RIndex];
      array[RIndex] = tmp;
      LIndex++;
      RIndex--;
    }
  }

  if (start < RIndex) quickSort(array, start, RIndex);
  if (end > LIndex) quickSort(array, LIndex, end);

  return array;
};

const N = input.shift();

console.log(quickSort(input, 0, N - 1).join("\n"));
