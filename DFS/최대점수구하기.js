function solution(m, s, t) {
  let answer = Number.MIN_SAFE_INTEGER;
  const n = s.length;

  function DFS(L, score, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, score);
    } else {
      DFS(L + 1, score + s[L], time + t[L]);
      DFS(L + 1, score, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

const s = [10, 25, 15, 6, 3];
const t = [5, 12, 8, 3, 4];
console.log(solution(20, s, t));
