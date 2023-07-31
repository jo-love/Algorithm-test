function solution(str) {
  let answer = 0;
  let stack = [];

  for (let x of str) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      const rt = stack.pop();
      const lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

console.log(solution("352+*9-"));
