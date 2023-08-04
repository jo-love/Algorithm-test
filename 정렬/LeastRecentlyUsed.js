function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) {
      if (x === answer[i]) {
        pos = i;
      }
      console.log("111", pos);
    }
    // cache misss인 경우
    if (pos === -1) {
      for (let i = size - 1; i > 0; i--) {
        answer[i] === answer[i - 1];
      }
      console.log("222", answer);
    }
    // hit의 상황
    else {
      for (let i = pos; i > 0; i--) {
        answer[i] === answer[i - 1];
      }
      console.log("333", answer);
    }
    answer[0] = x;
  });
}

function solution(size, arr) {
  // 1.size만큼의 배열 만들기
  let answer = Array.from({ length: size }, () => 0);

  // 2. 매개변수로 받는 배열과 answer 배열 비교해서 answer 배열에 같은 값이 존재하는지 확인
  for (let i = 0; i < arr.length; i++) {
    // 같은 값이 존재하는지 확인을 위한 위치 식별자
    let pos = -1;
    for (let j = 0; j < size; j++) {
      if (arr[i] === answer[j]) {
        pos = j;
      }
    }

    // 2.1. 같은 값이 없다면, 기존의 요소들을 뒤로 한칸씩 밀어주고(for문을 뒤에서부터 감소시켜야함), 매개변수 배열의 요소를 맨 앞에 넣어준다.(새로 추가되는 것을 넣고 밀면, 기존에 있던 첫번째 요소 처리하는데 더 로직이 들기 때문에)
    if (pos === -1) {
      for (let i = size - 1; i > 0; i--) {
        answer[i] = answer[i - 1];
      }
      // 매개변수 배열 요소 맨 앞에 삽입하기
      answer[0] = arr[i];
      // 2.2. 같은 값이 존재한다면, answer 배열에서 그 위치를 파악해서 그 위치 길이-1만큼 돈다.마찬가지로 뒤로 한칸씩 밀어주고, 매개변수 배열의 요소를 맨 앞에 넣는다.(뒤에서 앞으로 감소하며 돌아야함)
    } else {
      for (let i = pos; i > 0; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = arr[i];
    }
  }
  return answer;
}

const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

// [0,0,0,0,0] -> [1,0,0,0,0] -> [2,1,0,0,0], ...  answer에 없는 요소면 배열[0] 가장 첫번째 요소에 배치, 기존에 있는 요소이면 가장 앞으로 위치이동 나머지것들은 한 칸씩 뒤로 이동
