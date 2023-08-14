function solution(s, e) {
  let answer = 0;
  // 직선의 좌표 점은 1부터 10,000 까지이다.
  let visited = Array.from({ length: 10000 }, () => 0);
  let dis = Array.from({ length: 10000 }, () => 0); // distance 배열에 해당 자리로 가기위해서 몇번 뛴건지 기록
  let queue = [];

  visited[s] = 1; // 철수자리 방문처리
  queue.push(s); // 큐에 철수의 시작위치 넣어주기
  dis[s] = 0; // 철수자리는 0레벨(0번 뛴거니까) 표시

  // queue에서 요소가 다 나갈 때까지
  while (queue.length) {
    let prev = queue.shift();
    // [,] 배열 안의 요소들이 nx에 대응해서 각각 push 할 수 있다.
    for (let cur of [prev - 1, prev + 1, prev + 5]) {
      // 탐색하다가 타겟위치에 도달하면, dis 배열에 표시해두었던 자신의 부모 점핑횟수에서 +1
      if (cur > 0 && cur <= 10000 && cur === e) {
        answer = dis[prev] + 1;
        return answer;
      }
      // 점핑을 더 뛰어야 하는 경우
      if (visited[cur] === 0) {
        visited[cur] = 1;
        queue.push(cur);
        dis[cur] = dis[prev] + 1;
      }
    }
  }
  //   return answer;
}

console.log(solution(5, 14));

// BFS는 최단거리 찾는 문제에서 사용 queue로 문제해결
// 앞으로 1, 뒤로  1, 앞으로 5
