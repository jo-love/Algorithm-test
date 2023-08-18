function solution(coins, m) {
  let answer = 0;
  // i금액을 거슬러주는데 사용한 최소 동전개수, 처음에는 큰수로 초기화 필요 1원 동전 거슬러 줄 금액 맥스가 500개니까 넉넉하게 1000개로 초기화
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0; // 0원은 어떤 동전으로도 채울 수 없다.

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= m; j++) {
      // 동전 하나는 무조건 사용한다 +1
      // 동전의 최소값을 구하는 것이기 때문에 최소값이 나올 때마다 교체해준다.
      dy[j] = Math.min(dy[j], dy[j - coins[i]] + 1);
    }
  }

  answer = dy[m];
  return answer;
}

console.log(solution([1, 2, 5], 15));

// DFS로도 가능하지만, 동전의 종류가 많거나 거슬러줄 돈의 금액이 크다면 시간복잡도가 크다. -> 다이나믹으로 풀 생각을 해야한다.

//다이나믹 배열을 돌면서 동전의 종류도 각각 돌아가면서 개수를 채워야함
// 이중포문 종류가 1원짜리 하나만 있어서 다이나믹 배열을 채운다고 가정
