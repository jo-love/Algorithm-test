function solution(arr) {
  const originalArr = [...arr];
  let answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (originalArr[i] !== arr[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

const arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
