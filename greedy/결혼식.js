function solution(friends) {
  let answer = 0;
  let timeLine = [];

  for (x of friends) {
    timeLine.push([x[0], "s"]);
    timeLine.push([x[1], "e"]);
  }

  // i) 시간순서대로 오름차순 정렬  ii) 시간이 같다면, 떠나는 표식(e)먼저 정렬
  //charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환한다
  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (x of timeLine) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

const arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(solution(arr));

// 한 사람 사람의 시간 생각하지않고, 도착 시간, 떠난 시간을 전부 모아서 생각하면 쉬워진다. 도착을 차례차례 더하고, 떠난 시간을 만나면 한 사람이 떠난 거기 때문에 바로
// 이전이 최대 모인 숫자, 반복해서 max를 찾으면 된다.
