let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './B2789.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
console.log(input);
let cards = input[1].split(' ').map((e) => +e);
let M = input[0].split(' ').map((e) => +e)[1];
console.log('cards:',cards);
console.log(M, 'm');

const makeBlackjack = (arr, M) => {
  const selectNum = 3;
  const sumArr = [];
  let max = 0;

  const getPermutations = (arr, selectNum) => {
    const result = [];

    if (selectNum === 1) {
      return arr.map((el) => [el]);
    }
    arr.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const permutations = getPermutations(rest, selectNum - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  };

  const totalArr = getPermutations(arr, selectNum);
  totalArr.forEach((numArr) => {
    const getSum = numArr.reduce((prev, cur) => prev + cur);
    sumArr.push(getSum);
  });
  const filtered = sumArr.filter((num) => num <= M);
  max = Math.max(...filtered);
  console.log(max);
  return max;
};
makeBlackjack(cards, M);

// ex) [5,6,7,8,9] (1) 5개 중에 3개뽑기 - [5,6,7],[5,6,8]...
// (2) 순열 배열 요소 다 더하기 - 5+6+7 = 18, 5+6+8 = 19,...7+8+9 = 24
// (3) M(21)보다 작은 수 추려내기 - 18 <=21, 19 <=21, 24 no!
// (4) 추려낸 값 중에 제일 큰 값 return
