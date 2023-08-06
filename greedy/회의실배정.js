function solution(arr) {
  let answer = 0;

  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else a[1] - b[1];
  });

  let endTime = 0;
  arr.forEach((x) => {
    if (x[0] >= endTime) {
      answer++;
      endTime = x[1];
    }
  });
  return answer;
}

const arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
//[시작 시간, 끝나는 시간]
console.log(solution(arr));

// 예제들을 보면서 기준을 무엇으로 잡을지 선정하기. 끝나는 시간이 짧은 것으로 정렬
