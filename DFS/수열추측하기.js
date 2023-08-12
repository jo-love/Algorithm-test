function solution(n, f) {
  let answer = [],
    flag = 0;
  //메모제이션을 위한 2차원 배열 범위 -> 정수 N(1≤N≤10)
  let memo = Array.from(Array(11), () => Array(11).fill(0));
  // 순열(중복값 방지)을 위한 체크 배열
  let visited = Array.from({ length: n + 1 }, () => 0);
  //각 자리의 조합수
  let b = Array.from({ length: n }, () => 0);
  // 순열
  let p = Array.from({ length: n }, () => 0);

  function combi(n, r) {
    if (memo[n][r] > 0) return memo[n][r];
    if (n === r || r === 0) return 1;
    else return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  function DFS(L, sum) {
    if (flag == 1) return;
    if (L === n && sum === f) {
      answer.push(...p);
      // 답 이후의 for문을 돌필요가 없으므로 flag 변수 생성
      flag = 1;
    } else {
      // 순열 만들기 숫자 1부터 시작하니까 i는 1
      for (let i = 1; i <= n; i++) {
        if (visited[i] === 0) {
          visited[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          visited[i] = 0;
        }
      }
    }
  }

  // n-1Cr0, n-1C1 ... n-1Cn-2, n-1Cn-1 3C0,3C3 -> 각 자리의 조합수 구하기 ex)1 3 3 1
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
