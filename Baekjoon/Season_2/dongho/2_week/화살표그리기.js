const readline = require("readline");

const drawArrow = (N, line) => {
  let length = 0;

  for (let i = 0; i < N; i++) {
    const pointerPos = line[i][0];
    const pointerColor = line[i][1];
    let minDistance = 10000000000;
    for (let j = 0; j < N; j++) {
      if (i === j) {
        continue;
      }
      const comparePos = line[j][0];
      const compareColor = line[j][1];
      if (compareColor === pointerColor) {
        const distance = Math.abs(comparePos - pointerPos);
        if (distance < minDistance) {
          minDistance = distance;
        }
      }
    }
    length += minDistance;
  }

  console.log(length);
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
      const [pos, color] = line.split(" ").map((x) => +x);
      lines.push([pos, color]);
      cnt += 1;
      if (cnt === N) drawArrow(N, lines);
    }
  }).on("close", () => process.exit());
};

input();
