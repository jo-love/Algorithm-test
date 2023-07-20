function solution(limit, items) {
  let answer = 0;
  const student = items.length;

  items.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < student; i++) {
    let amountAvailable = limit - items[i][0] / 2 + items[i][1];
    // 50% 받은 아이템 1개 카운트
    let cnt = 1;
    // 50% 할인 안받은 나머지 아이템들
    for (let j = 0; j < student; j++) {
      // amountAvailable이 양수지만, 예를들어 1,2 처럼 작은 숫자인 경우, 50%할인 받지 않는 나머지 아이템들중에 큰 값은 돌 필요가 없다. 학생 수가 많은 경우
      // 다 도는 것은 낭비이기 때문에 break 필요.
      if (i !== j && amountAvailable < items[j][0] + items[j][1]) break;
      if (i !== j && amountAvailable >= items[j][0] + items[j][1]) {
        amountAvailable -= items[j][0] + items[j][1];
        cnt++;
      }
    }
    // 최대값에 answer을 안넣어주면 answer은 계속 cnt 값으로 값을 초기화한다. 이전의 값과 비교가 필요하다.
    answer = Math.max(answer, cnt);
  }
  return answer;
}

const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [8, 3],
];

console.log(solution(28, arr));

// 1. 물건값(arr[i][0])과 배송비(arr[i][1]) 합쳐서 정렬하기 -> 살 수 있는 최대 학생 수를 구하는 것이기 때문에 가장 적은 금액부터 살 수 있게 정렬이 필요
// 2. 50% 쿠폰을 각 아이템에 적용(items[i][0]/2 + items[i][1])
// 3. 50%할일 받은 아이템 한 번에 살 수 있는 경우의 수 구하기-> 이중 for문 필요
