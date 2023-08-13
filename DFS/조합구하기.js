function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L, s) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        // 기존 순열처럼 두번째 인자에 +1을 하면, 중복 경우의 수가 나옴 (2,2)
        DFS(L + 1, i + 1);
        console.log(s, i);
      }
    }
  }
  // L레벨 0, for문의 시작 숫자 구슬 1부터 시작
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));

// 조합은 순열과는 조금 다른 방식으로 풀어야 한다. 구슬 4개 중에 2개를 뽑는다고 했을 때, (1,2)를 뽑으면 (2,1) 같은 케이스이기 때문에 순열과 다르게 (2,1)의 경우는 없다.
// 중복을 허용하지 않는 순열을 구현할 때 사용했던  visited 배열로 재귀가 돌아올 때 visited[i]를 체크하는 방식으로는 풀 수 없고,  반복문의 i값을 조금 다르게 i+1을 계속 넘겨줘야 한다.
// 인자로 arr값이 주어지면 i는 0부터 시작하는데, arr이 따로 주어지지 않으면 현재 인덱스값으로 들어가므로 s인자는 for문의 스타트 넘버 1로 초기화한다. (구슬 1~4숫자니까)
