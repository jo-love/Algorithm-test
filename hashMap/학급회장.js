function solution(str) {
  let answer;
  let hash = new Map();

  for (let x of str) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, value] of hash) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

console.log(solution("BACBACCACCBDEDE"));

// new Map() – 맵을 만듭니다.
// map.set(key, value) – key를 이용해 value를 저장합니다.
// map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
// map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
// map.delete(key) – key에 해당하는 값을 삭제합니다.
// map.clear() – 맵 안의 모든 요소를 제거합니다.
// map.size – 요소의 개수를 반환합니다.
