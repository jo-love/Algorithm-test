function solution(arr, k) {
  let answer = 0,
    sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;

  for (let i = k; i < arr.length - (k - 1); i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));

// slidingWindow는 연속되는 데이터에서 한칸씩 옆으로 밀면서 연산하는 알고리즘을 말한다.
// 1. k-1만큼 for문을 돌려서 최초 0~(K-1) 까지의 합(sum)을 구한다 2. 새로운 for문을 돌리면서 기존에 구한 sum에서 k번으로 추가된 요소를 더하고, k번째 속하지 않게된 요소를 뺀다.
