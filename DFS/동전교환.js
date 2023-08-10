function solution(n, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  const length = n.length;

  function DFS(L, sum) {
    // sum이 m가 같지 않고 m을 넘는 경우 무한루프 방지하기 위한 코드
    if (m < sum) return;
    if (L > answer) return;
    // 이 문제에서는 L===length 가 아니고, 거슬러 줄 금액 m이 합계랑 같으면 조건에 부합하는 부분집합 완성
    if (sum === m) {
      console.log(L, sum, "an");
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < length; i++) {
        DFS(L + 1, sum + n[i]);
      }
    }
  }
  // 동전갯수, 동전의 합
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 2, 5], 15));
