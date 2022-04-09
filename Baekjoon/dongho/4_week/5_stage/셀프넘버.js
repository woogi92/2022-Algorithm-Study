function getSelfNum(number) {
  let sum = number;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

const selfNumArray = new Array(10000);
selfNumArray.fill(true);

for (let i = 0; i < 100000; i++) {
  selfNumArray[getSelfNum(i)] = false;
  if (selfNumArray[i]) {
    console.log(i);
  }
}
