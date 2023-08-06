function solution(m, arr) {
  let answer = 0;

  arr.sort((a, b) => a - b);

  let rt = arr.length - 1;
  let lt = 0;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === m) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > m) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
}

console.log(solution(23, [23, 87, 65, 12, 57, 32, 99, 81]));
