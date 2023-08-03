function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i];
    // 스코프문제 때문에 outer for문 스코프 내에서 변수j 선언이 필요
    let j;
    for (j = i - 1; j >= 0; j--) {
      // j(앞)가 i(뒤)보다 크면 j 바로 뒤(j+1)에 복사
      if (arr[j] > numToInsert) arr[j + 1] = arr[j];
      else break;
    }
    // j--가 된 상태에서 inner for 문을 나가기 때문에 하나 더 감소한 상태의 숫자가 outer for문 스코프에 찍힘 or break문을 타면, 바로 나오기 때문에 for문의 조건을 타지않음
    arr[j + 1] = numToInsert;
  }

  return answer;
}

5, 7, 7, 11, 10, 9; // i=1, j = 0; j+1 = j / outer는 j = -1      arr[j+1] = temp
console.log(solution([11, 7, 5, 6, 10, 9]));

// 삽입정렬 -> outer for문은 인덱스 1(i)부터 돌기 시작한다. inner for문은 i-1부터 시작해서 왼쪽으로 하나씩(j--) 줄여나가면서 반복문이 돈다.
// i와 j를 비교해서 j가 크다면, j를 j기준 한 칸 오른쪽(j+1)으로 복사한다.
