function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;

        // 위에 주석코드는 아래 문법과 동일한 결과

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15]));

// 이웃한 두 수끼리 비교하는 방법을 버블정렬이라고 한다. 가장 큰 수가 마지막으로 위치한다.
// -> 반복문이 돌때마다 마지막 요소는 빼고 돌아야한다.(마지막 요소는 전 반복문에서 가장 큰 수로 정해지기 때문에)
