// 선형탐색 알고리즘를 사용해서 어떤 원소가 리스트 안에 포함되어 있는지 확인해보자.
// 선형탐색 = 리스트의 처음부터 끝까지 순서대로 하나씩 탐색을 진행하는 알고리즘

// 1.리스트의 인덱스에 대해서 반복문 돌기
// 2.반복문 돌다가 요소를 찾으면 현재 위치 리턴
function linear_search(el, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === el) {
      return i;
    }
  }
  return "None";
}
//처음에 return "None"을 for문 범위 안에다 넣어서 원하는 값이 나오지 않았다.
// 찾는 값과 일치해야 i값을 리턴해서 나가는데 찾는 값이 아니므로 나가버리고 "None"을 for문 안에서 작성했기 때문에 None을 만나 리턴한다.
linear_search(2, [2, 3, 5, 7, 11]);
linear_search(0, [2, 3, 5, 7, 11]);
linear_search(5, [2, 3, 5, 7, 11]);
linear_search(3, [2, 3, 5, 7, 11]);
linear_search(11, [2, 3, 5, 7, 11]);
