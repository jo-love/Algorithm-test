function solution(n) {
  function recursive(n) {
    if (n === 0) return;
    else {
      recursive(n - 1);
      console.log(n);
    }
  }
  recursive(n);
}

console.log(solution(3));

// ## 스택 프레임: 함수가 호출될 때, 그 함수만의 스택 영역을 구분하기 위하여 생성되는 공간으로 함수와 관계되는 지역 변수, 매개변수, 복귀주소가 저장되며, 함수호출 시 할당되며,
// 함수가 종료되면 소멸된다.
