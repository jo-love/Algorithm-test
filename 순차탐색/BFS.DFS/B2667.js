let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './B2667.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = input[0];
input.shift();
const material = input.map((el) =>
  el
    .trim()
    .split('')
    .map((el) => +el),
);

const getComplex = (N, material) => {
  const visited = [];
  const complex = [];
  let number = 0;
  const dx = [0, 0, 1, -1]; //동서남북
  const dy = [1, -1, 0, 0]; //동서남북

  /// dx, dy 범위
  // 1. visited 이중배열 만들고, false로 속 채우기
  for (i = 0; i < N; i++) {
    visited.push(new Array(N).fill(false));
  }

  const rangeCheck = (i, j) => {
    if (i >= 0 && i < N && j >= 0 && j < N) {
      return true;
    }
    return false;
  };
  //3. dfs 실행
  const DFS = (i, j) => {
    if (rangeCheck(i, j) && !visited[i][j] && material[i][j] === 1) {
      // 방문처리
      visited[i][j] = true;
      number++;
      // 탐색노드 인근 탐색범위
      for (let n = 0; n < dx.length; n++) {
        DFS(i + dx[n], j + dy[n]);
      }
    }
  };
  // 2. 이중 for문으로 단지 행,열 탐색하기
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      // 방문한 기록이 없으며, 집이 있으면(=1)
      if (!visited[i][j] && material[i][j] === 1) {
        // DFS gogo
        DFS(i, j);
        complex.push(number);
        //DFS 한 텀 돌고나면 number 리셋
        number = 0;
      }
    }
  }
  complex.sort((a, b) => a - b);
  const result = [complex.length, ...complex];
  return result;
};

console.log(getComplex(N, material));
