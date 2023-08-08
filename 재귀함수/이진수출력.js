function solution(n) {
  let answer = "";

  function recursive(n) {
    if (n === 0) return;
    else {
      recursive(parseInt(n / 2));
      answer += n % 2;
    }
  }
  recursive(n);
  return answer;
}

console.log(solution(11));

// 11/2 몫은 5, 나머지는 1 5/2 몫은 2, 나머지는 1 , 2/2 몫은 1, 나머지는 0 -> 1011
