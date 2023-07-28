const compareMaps = (map1, map2) => {
  // size비교하는 이유는 1차로 걸러내기 위해서(ex.a:1,b:2/ a:1,b:1,c:1)
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
};

function solution(s, t) {
  let answer = 0;
  const tH = new Map();
  const sH = new Map();

  const makeHash = (index) => {
    if (sH.has(s[index])) sH.set(s[index], sH.get(s[index]) + 1);
    else sH.set(s[index], 1);
  };

  // 1. hash map 만들기
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  // t의 길이 - 1 만큼 for문 돌기
  for (let i = 0; i < t.length - 1; i++) {
    makeHash(i);
  }
  // 2. two points + sliding window
  let left = 0;
  for (let right = t.length - 1; right < s.length; right++) {
    // 2-1. 기존에서 문자하나추가
    makeHash(right);
    // 2-2. 아나그렘인지 비교하고, true이면, answer 카운팅
    if (compareMaps(sH, tH)) answer++;
    //2-3. 맨 앞(lt)요소에 -1하고, 그 값이 0이면 삭제 후, left point 증가
    sH.set(s[left], sH.get(s[left]) - 1);
    if (sH.get(s[left]) === 0) sH.delete(s[left]);
    left++;
    // 2-4 요소 추가하기
  }

  return answer;
}

console.log(solution("bacaAacba", "abc"));

// twoPoints + sliding Window + hash map
