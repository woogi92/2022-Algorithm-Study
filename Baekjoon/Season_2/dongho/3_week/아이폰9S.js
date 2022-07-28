let fs = require("fs");
let input = fs
  .readFileSync(
    "/Users/dongho/Desktop/Github/2022-Algorithm-Study/Baekjoon/Season_2/dongho/input.txt"
  )
  .toString()
  .split("\n")
  .map((x) => +x);

const clientsNum = input.shift();
const clients = input;
let maxLength = 1;

const removeClients = (clients, GB) => {
  return clients.filter((x) => x !== GB);
};

const searchMaxLength = (clients) => {
  let count = 1;
  for (let i = 0; i < clients.length; i++) {
    // 배열의 마지막 인덱스에 도달했을 경우 break
    if (i + 1 === clients.length) {
      break;
    }
    if (clients[i] === clients[i + 1]) {
      count++;
      if (count > maxLength) {
        maxLength = count;
      }
    } else {
      count = 1;
    }
  }
};

const main = () => {
  let GBArray = []; // 처리했던 용량을 담는 배열
  //배열 전체 탐색
  for (let i = 0; i < clientsNum; i++) {
    const GB = clients[i];
    //처리했던 용량이라면 continue
    if (GBArray.includes(GB)) {
      continue;
    }
    const tmpClients = removeClients(clients, GB); // 특정 용량을 제외한 배열
    searchMaxLength(tmpClients); // 배열 길이 탐색
    GBArray.push(GB); // 처리한 용량은 배열에 push
  }
  console.log(maxLength);
};

main();
