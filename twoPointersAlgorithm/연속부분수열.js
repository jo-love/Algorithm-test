function solution(arr, m) {
  let answer = 0,
    left = 0,
    sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (sum === m) {
      answer++;
    }
    // 합한 값이 너무 커서 계속 빼야되는 경우가 생기니까 반복하는 while문이 필요 ex) 1,1,1,2,4 의 경우, 총 합 9가 6을 넘기 때문에 왼쪽에서 1,1,1을 3번 반복해서 빼야한다.
    // *** while 조건문에 같다도 넣어야 하는 이유는 위에 로직(sum === m )에 들어가면 answer을 계속 ++ 시킨다.
    while (sum >= m) {
      // 걊은 뻬고 left 원소는 증가.
      sum -= arr[left++];
      if (sum === m) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));

// left, right side를 두어서 숫자를 합친 값이 타겟인 m까지 도달하도록 right를 ++증가시킴.
// m을 넘으면, left를 뺌.
// right가 끝날 때 까지 반복문 실행.
