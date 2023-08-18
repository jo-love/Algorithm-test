function solution(n, k) {
  if (n % k === 0) {
    return 0;
  }
  let count = 1;
  let currentNumber = n;
  const numToString = n.toString();
  const numLength = numToString.length;

  while (true) {
    currentNumber = currentNumber * Math.pow(10, numLength) + n;
    console.log("currentNum", currentNumber);
    count++;

    if (currentNumber % k === 0) {
      return count;
    }
    if (currentNumber >= 1000000000) {
      return -1;
    }
  }
}

console.log(solution(15, 8));

function findMinRepeats(n, k) {
  if (k === 1) {
    // k가 1인 경우 어떤 수든 반복할 필요 없이 1번이면 됨
    return 1;
  }

  let current = n % k; // 현재 n을 k로 나눈 나머지
  let repeat = 1; // 반복 횟수

  while (current !== 0 && repeat <= k) {
    current = (current * 10 + n) % k;

    repeat++;
  }

  return current === 0 ? repeat : -1;
}
console.log(findMinRepeats(15, 8));
