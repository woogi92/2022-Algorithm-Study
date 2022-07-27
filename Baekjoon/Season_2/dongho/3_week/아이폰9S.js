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
let maxLength = 0;

const removeClients = (clients, GB) => {
  return clients.filter((x) => x !== GB);
};

const searchMaxLength = (clients) => {
  let count = 0;
  for (let i = 0; i < clients.length; i++) {
    if (i + 1 === clients.length) {
      break;
    }
    if (clients[i] === clients[i + 1]) {
      count++;
      if (count > maxLength) {
        maxLength = count;
      }
    } else {
      count = 0;
    }
  }
};

const main = () => {
  let GBArray = [];
  //배열 전체 탐색
  for (let i = 0; i < clientsNum; i++) {
    const GB = clients[i];
    if (GBArray.includes(GB)) {
      continue;
    }
    const tmpClients = removeClients(clients, GB);
    searchMaxLength(tmpClients);
    GBArray.push(GB);
  }
  if (maxLength) {
    console.log(maxLength + 1);
  } else {
    console.log(0);
  }
};

main();
