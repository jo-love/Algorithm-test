function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let y = 0; y < moves.length; y++) {
    for (let x = 0; x < board.length; x++) {
      if (board[x][moves[y] - 1] !== 0) {
        const temp = board[x][moves[y] - 1];
        // 만난 인형은 0으로 초기화
        board[x][moves[y] - 1] = 0;
        // stack 마지막 요소랑 뽑은 인형 요소랑 같으면 stack에서 제거
        if (temp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(temp);
        }
        // if문 한번 만족시키고 나와야되니까 이 위치에서 break
        break;
      }
    }
  }
  return answer;
}
[2, 5];
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// (x, 0), (x, 4), (x, 2), (x, 4);
console.log(solution(board, moves));
// 터뜨려져 사라진 인형의 갯수 구하기

// 1. 이중for문 x는 증가, y는 고정 x가 한바퀴 다 돌면 y는 moves배열에서 반복문 증가
// 2. 꺼낸 인형이 stack에 이미 들어가있는 인형과 일치하면 제거(pop)하고, count 2증가시켜줌, 일치하지 않으면, stack에 push. 임시로 인형을 저장 후, 요소를 0으로 초기화해야함
// 3. 첫번째로 만난 인형만 꺼내야한다.안그러면, moves 기 첫번째 돌 때, x는 두번 돌 기회가 있기 때문에, 4,3을 push 해버린다. 두번째 for문이 한번 만족시키면 break를 통해서 나와야한다.
