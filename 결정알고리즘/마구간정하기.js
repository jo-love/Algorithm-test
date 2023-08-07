function count(positions, distance) {
  // 말 마리 수
  let cnt = 1;
  // 서로 최대한 멀리 떨어뜨려야 하기때문에 초기값은 가장 첫번째 마굿간에 두고, 해당 위치를 기억한다.
  let lastP = positions[0];

  for (let i = 1; i < positions.length; i++) {
    if (positions[i] - lastP >= distance) {
      cnt++;
      lastP = positions[i];
    }
  }
  return cnt;
}

function solution(horses, positions) {
  let answer = 0;

  positions.sort((a, b) => a - b);
  // 배열의 마굿간 요소가 아니라 각 마구간 간 최소 거리는 1로 가정하기 때문에 lt를 positions[0]으로 지정해서는 안된다.
  let lt = 1;
  //최대거리는 마구간의 최대 좌표
  let rt = positions[positions.length - 1];

  while (lt <= rt) {
    //마굿간 사이의 거리 mid
    let mid = parseInt((lt + rt) / 2);
    // 카운트가 주어진 말의 수(horses)보다 크거나 같다면 최적의 답은 아니여도 답의 범위에는 속하므로 임시적으로 answer에 할당
    if (count(positions, mid) >= horses) {
      answer = mid;
      // 탐색 범위가 더 커야 말들이 더 멀리 떨어진 최적의 거리를 구할 수 있으므로 lt를 옮겨준다.
      lt = mid + 1;
      // 거리가(mid)가 너무 멀어서서 cnt가 필수로 들어가야할 말(horses)만큼 다 들어가지 못했으므로, rt를 줄여 더 적은 거리를 탐색해야 한다.
    } else rt = mid - 1;
  }

  return answer;
}

console.log(solution(3, [1, 2, 8, 4, 9]));
