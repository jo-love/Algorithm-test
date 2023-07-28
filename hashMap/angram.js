function solution(str1, str2) {
  let answer = "YES";

  let sh = new Map();

  for (let x of str1) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
  }
  console.log(sh);

  for (let x of str2) {
    // Map key에 x가 없거나 x의 값이 0이면 angram이 아니다.
    if (!sh.has(x) || sh.get(x) === 0) return "NO";
    // x가 있으면, x의 값을 감소시켜준다.
    else sh.set(x, sh.get(x) - 1);
  }

  return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
