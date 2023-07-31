function solution(n, k) {
  let answer = 0;
  let queue = [];

  for (let i = 0; i < n; i++) {
    queue.push(i + 1);
  }

  while (queue.length) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();

    if (queue.length === 1) answer = queue[0];
  }
  return answer;
}

console.log(solution(8, 3));
