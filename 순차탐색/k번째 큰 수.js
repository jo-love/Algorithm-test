function solution(n, k, cards) {
  let answer;
  const sumArr = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        sumArr.push(sum);
      }
    }
  }
  const temp = new Set(sumArr);
  const arr = [...temp];
  arr.sort((a, b) => b - a);
  answer = arr[k - 1];
  return answer;
}
console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
