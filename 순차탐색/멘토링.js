const solution = (test) => {
  //테스트 횟수
  const m = test.length;
  // 학생수
  const n = test[0].length;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i, j);
      // i는 멘토, j는 멘티
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let mentoRank = (mentiRank = 0);
        for (let s = 0; s < n; s++) {
          console.log(test[k][s], "학생번호");
          if (i === test[k][s]) mentoRank = s;
          if (j === test[k][s]) mentiRank = s;
        }
        // 멘토등수가 멘티등수보다 작다면 성적이 앞서는 것
        if (mentoRank < mentiRank) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
};

const test = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

solution(test);
console.log(solution(test));
// 1. 멘토, 멘티가 나올 경우의 수 구하기 학생 수 * 학생 수 ex).(1, 1), (1, 2)...
// 2. 각 각의 테스트 안에서 앞에서 구한 멘토, 멘티와 일치하는 멘토,멘티 찾기 -> 등수 찾기 위해서
