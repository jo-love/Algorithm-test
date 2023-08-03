function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // let temp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = temp;

        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return answer;
}

function solution2(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}
// -> 1번 풀이방법이 jfor문 안에서 작은 수로 계속 계속 갈아바꿔끼는거에 비해서, 2번 풀이방법은 작은 수 결정이 끝나면, j for문 밖에서 한번에 바꿔주기 때문에 더 효율적이다.

console.log(solution([7, 11, 5, 23, 15, 10]));
console.log(solution2([7, 11, 5, 23, 15, 10]));

// 가장 왼쪽은 고정하고, 차례차례 비교하는 방법
