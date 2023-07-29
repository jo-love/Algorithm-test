function solution(str) {
  let answer;
  let stack = [];

  for (let x of str) {
    if (x === ")") {
      // 쌍이 맞는 여는 괄호가 나올 때 까지 pop;
      // pop()은 마지막 요소를 삭제하고, 그 요소를 반환한다.
      while (stack.pop() !== "(");
    }
    //"("여는 괄호와 문자이면, stack에 push
    else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
