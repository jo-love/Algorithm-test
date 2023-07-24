function solution(arr1, arr2) {
  const answer = [];
  const n = arr1.length;
  const m = arr2.length;

  // 두개의 포인트 변수
  let p1 = (p2 = 0);

  // 배열을 다 돌기 전까지 while문 돌기
  while (p1 < n && p2 < m) {
    // p1이 작으면 빈배열에 push후, p1++(증가));
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  // 한 배열이 answer배열에 이미 모든 요소가 추가되어서 나머지 배열의 요소만 남은 경우
  // p1의  배열(arr1)이 남은 경우
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  console.log(answer, "answer");
  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));

// sort 메소드를 사용하면 간편하겠지만, 시간복잡도가 n log n으로 시간복잡도가 좋지 않다. 이때, twopoints algorithm을 사용해보자.
// * twopoints algorithm은 주로 1차원 배열문제나 한 배열에서 부분배열을 다루거나 배열 안에서 각각 다른 위치에 있는 두 개의 요소들을 가지고 계산할 때 사용된다.
