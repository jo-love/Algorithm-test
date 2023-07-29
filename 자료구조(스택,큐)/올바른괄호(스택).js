function solution(s) {
  let answer = "YES";
  let count = 0;

  for (let x of s) {
    if (x === "(") {
      count++;
    } else {
      count--;
    }

    if (count === -1) {
      return "NO";
    }
  }

  if (count === 0) {
    return answer;
  } else {
    return "NO";
  }
}

console.log(solution("))(("));

// stack으로 풀기
function solution2(s) {
  let answer = "YES";
  let stack = [];

  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  // "(" 가 더 많은 경우
  if (stack.length > 0) return "NO";
  return answer;
}

// console.log(solution2(")()("));
