function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0); // 다이나믹 테이블 7계단
  // 1층, 2층 초기화 -> 계단을 오르는 방법이 1계단씩 오르거나 2계단씩 오르는 경우로 주어짐
  dy[1] = 1;
  dy[2] = 2;

  // 3층부터 for문
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  answer = dy[n];
  return answer;
}

console.log(solution(7));
