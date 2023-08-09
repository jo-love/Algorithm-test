function solution(arr) {
  let answer = "NO",
    flag = 0;
  const total = arr.reduce((a, b) => a + b, 0);
  const n = arr.length;

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      // 만들어진 하나의 부분집합과 쓰이지 않는 나머지의 합이 같다면 정답
      if (total - sum === sum) {
        answer = "YES";
        // 부분집합이 완성되어 합이 같은 것을 찾았을 때, 더 재귀함수를 더 돌면 낭비이기 때문에
        // 답이 맞으면 식별자하나를 추가해준다.
        flag = 1;
      }
    } else {
      // 요소를 더한 경우
      DFS(L + 1, sum + arr[L]);
      //요소를 뺀 경우
      DFS(L + 1, sum);
    }
  }
  // 인덱스, 합
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));

// (0,0) (1,1) (1,0) (2,4) (2,1) (3,9) (4,15) (5, 22) (6,32)...
