//이진탐색(Binary Search)알고리즘은 정렬된 리스트를 전제로 1회 비교를 거칠 때마다 탐색 범위가 절반으로 줄어드는 형식이다.

//첫번째 인덱스와 마지막 인덱스를 더해서 반으로 나누고 그 값이 원하는 값인이면 중간 인덱스 리턴.
// 찾는 값이 아닌 경우, 찾는 값과 가운데 값 비교해서 찾는 값이 작다면 배열의 0번 인덱스부터 가운데 인덱스 이전까지 찾아 봄. (0번인덱스부터 중간인덱스 -1)
// 반대의 경우는 가운데 인덱스 이후부터 끝까지 범위 (중간인덱스+1부터 마지막인덱스)
// 변하는 값이 무엇인지 생각해서 변수로 만들기가 포인트

//초기 코드
function binary_search(el, list) {

    for (let i = 0; i < list.length; i++) {
      let midIdx = parseInt((list.length - 1) / 2);
      if (list[midIdx] === el) {
        return midIdx;
      } else if (list[midIdx] > el) {
        midIdx = parseInt((midIdx - 1)/2);
      } else {
        midIdx = parseInt((midIdx + 1 + (list.length-1))/2);
      }
    }
    return "None";
  }
//위 코드의 두가지 문제점. 첫번째 for문 사용 - for문을 사용해도 답은 같지만 효율성이 떨어진다. 반복문의 몇 번 돌지 알지못할 때에는 while을 사용하는 것이 좋다.
// 두번째 변수지정 - 가운데인덱스(midIdx)만 변수로 지정해서 사용하고 있지만, 변수지정이 더 필요하다. 
//값이 변하는 첫번째 인덱스와 마지막 인덱스, 이 둘의 이전 값을 기억해서 사용해야 한다.


//리팩토링 코드
function binary_search(el, list) {
  let startIdx = 0;
  let endIdx = list.length - 1;
  while (startIdx <= endIdx) {
    let midIdx = parseInt((startIdx + endIdx) / 2);
    if (list[midIdx] === el) {
      return midIdx;
    } else if (list[midIdx] > el) {
      endIdx = midIdx - 1;
    } else {
      startIdx = midIdx + 1;
    }
  }
  return "None";
}

binary_search(2, [2, 3, 5, 7, 11]);
binary_search(0, [2, 3, 5, 7, 11]);
binary_search(5, [2, 3, 5, 7, 11]);
binary_search(3, [2, 3, 5, 7, 11]);
binary_search(11, [2, 3, 5, 7, 11]);
