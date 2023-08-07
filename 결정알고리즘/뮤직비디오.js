function solution(dvd, songs) {
  let answer = 0;
  //하나를 담는 경우가 최소경우인데 그 중 가장 길이가 긴 음악까지 담아야하기때문에 이진 탐색에서 최소값은 배열 내에서 최대값이 된다.
  let lt = Math.max(...songs);
  // 배열의 값을 모두 더한 값
  let rt = songs.reduce((prev, curr) => prev + curr, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    //   rt를 줄여서 더 많은 dvd에 가까워질 수 있도록
    if (count(mid) <= dvd) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }

  // 배열을 더해서 mid와 최대 가까운 근사값 찾기
  function count(capacity) {
    let sum = 0;
    let cnt = 1;
    for (x of songs) {
      if (sum + x > capacity) {
        cnt++;
        // sum이 mid를 넘으면 sum을 갱신시킨 후, 갱신 숫자부터 다시 더해야함
        sum = x;
      } else sum += x;
    }
    return cnt;
  }

  return answer;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 결정알고리즘은 이분검색 바탕으로 이뤄진다.인덱스가 기준이 아니고 값 자체가 기준이다.
// 배열 순서대로 dvd에 넣어야하기 때문에 정렬을 해서 순서를 바꾸면 안된다. max 값을 따로 찾아야함
