function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n + 1];
  return answer;
}

console.log(solution(5));

//이전 계단오르기와는 달리 종착지가 개울을 다 건널 때이다.
// 만약 1번,2번,3번 뛸 수 있다면?
//-> dy[1] + dy[2] = 3이라고 생각할수도 있는데 dy[0]에서 3칸 뛰어서 오는 경우도 한가지(dy[0]=1) 추가해야한다. for(i=3)dy[i-3]+dy[i-2]+dy[i-1] 아니면 dy[3]=4,for(i=4)
