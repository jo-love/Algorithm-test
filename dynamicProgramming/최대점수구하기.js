function solution(m, arr) {
  let answer = 0;

  let dy = Array.from({ length: m + 1 }, () => 0); // 이번에는 최대값을 구하는 것이기때문에 0으로 초기화

  for (let i = 0; i < arr.length; i++) {
    const s = arr[i][0]; //점수
    const t = arr[i][1]; //시간
    for (let j = m; j >= t; j--) {
      let max = dy[j - t] + s;
      dy[j] = Math.max(dy[j], max);
    }
  }

  answer = dy[m];
  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ]),
);

// 동전교환과는 풀이가 다른 부분이 동전은 종류는 중복이 가능하지만, 시험은 이미 푼 문제를 또 풀지는 않는다.
// 동전교환처럼 반복문을 작은 수에서부터 증가하면, 10분(10번째 요소를 도는 중)에서 5분([10, 5])를 뺀 dy[5]=10 + 10을 계산한 20이 되서
// 이미 푼 문제를 또 푸는 격이 된다.
// test
