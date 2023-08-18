function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0); // 길이 저장
  // 배열의 0번째 요소는 자기자신밖에 없으니까 1로 고정
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      //arr[j] < arr[i] 이 경우는 많기 때문에 조건이 추가되어야함
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }

    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }

  return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
//                    1, 1, 2, 3, 2, 1, 4, 2

// 최대 부분 증가수열이란 한 배열이 주어지면 연속,비연속적 index는 증가하는 경우 크기가 증가하는 중 가장 길이가 긴 것을 말한다. ex) 3,7,8,9
// i는 고정이고, j는 i-1씩 탐색한다.
