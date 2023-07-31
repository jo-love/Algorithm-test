function solution(essential, total) {
  let answer = "YES";
  let queue = [...essential];

  for (let x of total) {
    if (queue.includes(x)) {
      console.log(x);
      if (queue.shift() !== x) {
        return "NO";
      }
    }
  }
  // 필수과목이 수업계획보다 많은 경우 for문을 다 돌려도 처리못하기 때문에 ex)("abcd", "abc")
  if (queue.length > 0) return "NO";

  return answer;
}
console.log(solution("CBA", "CBDAGE"));
