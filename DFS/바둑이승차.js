function solution(c, w) {
  // 비교해야하니까 최초에는 가장 작은 수가 필요
  let answer = Number.MIN_SAFE_INTEGER;
  const n = w.length;

  function DFS(L, sum) {
    if (sum > c) return;
    // 부분집합이 완성
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      // 바둑이 태운 경우
      DFS(L + 1, sum + w[L]);
      // 바둑이 안 태운 경우
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
