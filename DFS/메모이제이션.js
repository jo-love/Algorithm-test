function solution1(n, r) {
  let answer;

  function DFS(n, r) {
    // n이 r과 같거나 r이 0이면 1이 나온다. ex) 2C2, 2C0 -> 1
    if (n === r || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution2(5, 3));

// 조합 구하는 공식 : nCr = n-1Cr-1 + n-1Cr -> {1,2,3,4,5} 에서 3개를 뽑아  조합을 만든다고 하자.
// 예를들어, 5를 하나 선택했을시 전체 고를 수 있는 보기는 5에서 자기 자신을 뺀 4, 3개 중에 1개를 선택했으니 2개를 선택하면 된다.4C2
//         5가 제외한 경우의 수를 구하면, 마찬가지로 5를 뺀 나머지 4가지에서 선택할 수 있는 경우 3개 4C3 => 4C2 + 4C3

// solution1 함수의 경우에는 숫자가 큰 경우 연산이 커서 오래 걸린다. 이미 구한 값을 옆에서 계속 가지치고 있기 때문에 이미 나온 값을 메모제이션 해주면 연산을 줄일 수 있다.
function solution2(n, r) {
  let answer;
  // (n,r)의 값을 저장할 이차원 배열 필요 ex)[5][3]  범위가 n(3<=n<=33) 이니까 넉넉하게 35로 설정
  const dy = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    // 값이 저장되었으면
    if (dy[n][r] > 0) return dy[n][r];
    // n이 r과 같거나 r이 0이면 1이 나온다. ex) 2C2, 2C0 -> 1
    if (n === r || r === 0) return 1;
    // 메모제이션
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution2(33, 19));
