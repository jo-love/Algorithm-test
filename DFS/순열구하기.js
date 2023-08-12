function solution(arr, m) {
  arr.sort((a, b) => a - b);
  let answer = [];
  const n = arr.length;
  // 만들어진 부분집합을 넣기 위한 배열
  let tmp = Array.from({ length: m }, () => 0);
  // arr 요소 중 사용한 것을 체크해주기 위한 배열
  let check = Array.from({ length: arr.length }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1; //방문처리
          tmp[L] = arr[i];
          DFS(L + 1);
          // 조건에 만족하지 못해서 뒤로 돌아가는 지점이니까 기존에 들어간 요소 체크(1)했던거 0으로 할당
          check[i] = 0; // 방문 후 다시 올라갈 때 원상복구
        }
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution([3, 6, 9, 5], 2));

// 중복없이 경우의 수 구하기
