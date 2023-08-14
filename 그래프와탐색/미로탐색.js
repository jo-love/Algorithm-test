function solution(board) {
  let answer = 0;
  const n = board.length;
  const dx = [-1, 0, 1, 0]; // 행의 동서남북 방향
  const dy = [0, 1, 0, -1]; // 열의 동서남북 방향

  function DFS(x, y) {
    // 행과 열이 board 끝에 오면 도착지
    if (x === n - 1 && y === n - 1) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        // 다음좌표 구하기
        let nx = x + dx[k];
        let ny = y + dy[k];

        // 경계선 벗어난 범위 처리 && 갈수 있는 통로(1)일 때
        if (
          nx >= 0 &&
          nx <= n - 1 &&
          ny >= 0 &&
          ny <= n - 1 &&
          board[nx][ny] === 0
        ) {
          board[nx][ny] = 1; // 온 길 다시 돌아기지 못하게 체크
          DFS(nx, ny);
          board[nx][ny] = 0; // 앞에 길이 막혀서 뒤로 돌아갈 때 체크해제
        }
      }
    }
  }

  board[0][0] = 1; //방문처리
  DFS(0, 0); // 인자로 배열이 주어져있는 상태이기때문에 0부터 시작
  return answer;
}

const arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];
console.log(solution(arr));

// 동서남북 4방향으로 트리뻗기
