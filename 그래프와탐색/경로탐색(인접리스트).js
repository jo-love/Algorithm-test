function solution(n, arr) {
  let answer = 0;
  // 행은 정점 수만큼 길이, 열은 graph[행] 길이만큼 각자 다름 ex) [1,2][1,3][1,4] -> graph[1][0]=2...
  // 열은 비워둔채로 세팅
  let graph = Array.from(Array(n + 1), () => Array());
  let visited = Array.from({ length: n + 1 }, () => 0);

  // graph 인접리스트 생성하기
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) {
      answer++;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        // 기존에 그래프배열에 갈 수 있는지 확인하는 코드는 필요 없이 다 방문하면 됨 배열graph[v][i]===1 삭제
        // v정점에서 갈 수 있는 정점 번호 -> graph[v][i]
        if (visited[graph[v][i]] === 0) {
          visited[graph[v][i]] = 1;
          DFS(graph[v][i]);
          visited[graph[v][i]] = 0;
        }
      }
    }
  }

  visited[1] = 1;
  DFS(1);
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

// 인접행렬은 정점 갯수가 너무 많으면 for문이 너무 많이 돎 -> 메모리 낭비도 크고, 시간복잡도 올라감 -> 인접리스트 사용
