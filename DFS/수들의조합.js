function solution(arr, k, m) {
  let answer = 0;
  let tmp = Array.from({ length: k }, () => 0);

  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) answer++;
    } else {
      // arr이 주어져서 0번 인덱스 번호가 첫번째부터니까 i의 범위가 arr.length와 같아서는 안된다
      for (let i = s; i < arr.length; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));

// arr 숫자 중 k개를 뽑은 조합의 합이 m의 배수가 몇개인가
