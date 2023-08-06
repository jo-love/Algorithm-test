function solution(arr) {
  let answer = arr;

  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  return answer;
}

function solution2(arr) {
  let answer = arr;

  arr.sort((a, b) => {
    if (a[0] === b[0]) a[1] - b[1];
    else a[0] - b[0];
  });

  return answer;
}

const arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(arr));
console.log(solution2(arr));
