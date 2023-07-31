function solution(str) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      stack.pop();
      // ")" 이전 요소가 "("인 경우 -> 레이저
      if (str[i - 1] === "(") answer += stack.length;
      // ")" 이전 요소가 ")" -> 막대기
      else answer += 1;
    }
  }
  return answer;
}
console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
