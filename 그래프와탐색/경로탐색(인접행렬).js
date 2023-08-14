function solution(n, arr) {
  let answer = 0;
  // 1행 1열부터 시작으로 사용하니까 배열의 0번 인덱스는 사용하지 않고 1번 인덱스부터 사용 -> n이면 0,1,2,3,4,  n+1이면 1,2,3,4,5
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let visited = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  // 이동방향 세팅하기 -> 인자로 주어진 배열 경로[a][b]이용해서 표시하기
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) {
      console.log(path);
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        // v라는 정점에서 i라는 정점으로 갈 수 있냐 판단
        // [1][1]은 graph에 0이기 때문에 i는 2로 넘어간다
        if (graph[v][i] === 1 && visited[i] === 0) {
          visited[i] = 1; // 방문할 i정점 체크하고,
          path.push(i);
          DFS(i); // i정점으로 넘어간다
          visited[i] = 0;
          path.pop();
        }
      }
    }
  }

  //  if (graph[v][i] === 1 ) graph[1][1] 조건에 걸리지 않으므로 처음부터 1을 push해줌
  path.push(1);
  // if(graph[v][i] === 1) 조건에 걸리지 않기 때문에 방문처리를 하지 않고 간다. 그래서 이쪽에서 처음부터 방문처리를 해줘야 [ 1, 2, 1, 3, 4, 5 ]이런 경우가 안 생김
  visited[1] = 1;
  DFS(1); // 1번 정점부터 시작해서 n까지
  return answer;
}

const arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));

// D(1) ~ D(5)
