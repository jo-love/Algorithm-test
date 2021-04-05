// palindrome
// *반드시 for문 사용하기
// 알고리즘 자체의 모습을 상상할 기회가 줄어들기 때문에 알고리즘의 개념을 파악하는 단계에서는
// 내장 함수를 최대한 이용하지 않는 것을 추천한다고 한다.

// 1번 풀이 - 내장 함수를 사용
function is_palindrome(word) {
  const reverseWord = word.split("").reverse().join("");
  return word === reverseWord ? true : false;
}
is_palindrome("racecar");
is_palindrome("stars");
is_palindrome("토마토");

// 2번 풀이 - for문 사용하여 문제를 해결 
const is_palindrome = (word) => {
  let reverseStr = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + word[i];
  }
  if (word === reverseStr) {
    return true;
  } else return false;
};

is_palindrome("racecar");
is_palindrome("stars");
is_palindrome("토마토");
