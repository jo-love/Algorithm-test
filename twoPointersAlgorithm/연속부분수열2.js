function solution(arr, m) {
  let answer = 0,
    left = 0,
    sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > m) {
      sum -= arr[left++];
    }
    // ex) 1인 경우 -> {1} , 1 + 3인 경우 -> {3},{1,3}
    if (sum <= m) answer += right - left + 1;
  }

  return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5));
