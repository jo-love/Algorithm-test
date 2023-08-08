//아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.

// 전위순회
function solution(v) {
  let answer = "";
  function recursive(v) {
    if (v > 7) return;
    else {
      answer += v + "";
      recursive(v * 2);
      recursive(v * 2 + 1);
    }
  }
  recursive(v);
  return answer;
}

console.log(solution(1));

// 후위순회
function solution2(v) {
  let answer = "";
  function recursive(v) {
    if (v > 7) return;
    else {
      recursive(v * 2);
      recursive(v * 2 + 1);
      answer += v + "";
    }
  }
  recursive(v);
  return answer;
}

console.log(solution2(1));

// 전위순위: 부모 - 왼쪽 - 오른쪽 / 중위순위: 왼쪽 - 부모 - 오른쪽 / 후위순위: 왼쪽 - 오른쪽 - 부모  왼쪽자식-2*부모노드, 오른쪽자식-2*부모노드+1
