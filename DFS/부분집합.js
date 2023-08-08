function solution(n) {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    // 증가하는 v가 n을 넘기 전까지만 증가하여 재귀함수를 호출한다
    if (v > n) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      // v가 있는 경우
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      // v가 없는 경우
      DFS(v + 1);
    }
  }

  // dfs 1부터 호출
  DFS(1);
  return answer;
}

console.log(solution(3));
