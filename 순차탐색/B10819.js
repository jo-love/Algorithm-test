let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './B10819.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = input[1].split(' ').map((e) => +e);

// 1. n개 중에 n개 뽑기 - 순열로 모든 경우의 수 구하기
// 2. 절대값 합 구하는 함수 만들기
// 3. 절대값 함수에 순열구하는 함수에 파라미터로 넣기
function getSum(arr) {
  const result = [];

  arr.forEach((numArr) => {
    const absArr = [];
    for (i = 0; i < numArr.length - 1; i++) {
      const abs = Math.abs(numArr[i] - numArr[i + 1]);
      absArr.push(abs);
    }
    const absSum = absArr.reduce((prev, cur) => prev + cur);
    result.push(absSum);
  });
  console.log(Math.max(...result));
  return Math.max(...result);
}

function getPermutations(arr) {
  const result = [];
  function swap(arr, idxA, idxB) {
    const temp = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = temp;
  }

  function generate(arr, n) {
    if (n === 1) {
      return result.push([...arr]);
    }
    generate(arr, n - 1);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swap(arr, i, n - 1);
      } else {
        swap(arr, 0, n - 1);
      }
      generate(arr, n - 1);
    }
  }
  generate(arr, arr.length);
  return getSum(result);
}

getPermutations(num);