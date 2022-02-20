// 인자는 명수(N)와 능력치(S)

const points = [[0 ,1 ,2 ,3 ,4 ,5],[1 ,0 ,2 ,3 ,4 ,5],[1, 2, 0, 3, 4, 5],[1, 2, 3, 0, 4, 5],[1, 2, 3, 4, 0, 5],[1, 2, 3, 4, 5, 0]];

const getCombinations = (players, selectNum) => {
    const result = [];
    
    if(selectNum === 1) {
      return players.map((el) =>[el]);
    }
    players.forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getCombinations(rest, selectNum - 1);
      const attached = combinations.map((combi) => [fixed,...combi]);
      result.push(...attached);
    })
  console.log(result)
    return result;
  }

const getMinimum = (N,points) => {
  const players = [...Array(N).keys()];
  const selectNum = 2;
  const resultArr = getCombinations(players, selectNum);
  const linkArr = [];
  let min = 0;
  
  resultArr.forEach((el) => {
       const linkPlayers = players.filter(target => !el.includes(target));
       return linkArr.push(linkPlayers);
    })
console.log(linkArr,"linkarr")
  const getPoints = () => {
    const startTeam = [];
    const linkTeam = [];
    const startSum = resultArr.map((pt) => points[pt[0]][pt[1]] + points[pt[1]][pt[0]]);
    const linkSum = linkArr.map((pt) => points[pt[0]][pt[1]] + points[pt[1]][pt[0]]);
     startTeam.push(...startSum);
    linkTeam.push(...linkSum);
    console.log(startTeam,"start");
    console.log(linkTeam,"link");
    const subtract = startTeam.map((pt,idx) => Math.abs(pt - linkTeam[idx]));
    console.log(subtract, "빼기")
    min = Math.min(...subtract);
  }
  getPoints();
  return min;
}

getMinimum(6,points);



//1. N명인 연속된 숫자로 이뤄진 배열 만들기 N=4 -> [1,2,3,4] 
//2. 4명 중, 2명이 같은 팀인 경우의 수 ex) (1,2),(1,3),...(3,4)
//3. startTeam, linkteam 능력치 구하기 - 점수판 배열 안에 배열형태로 만들어서 이중포문으로 돌리기 

//1. -> Array.key 메소드 이용하기 : Array(size)를 넣으면 크기가 size인 배열이 생성되는데 모든 값은 empty를 가진다.keys 메서드를 사용하면 배열의 인덱스를 순회하는 iterator를 반환하고 이를 spread 연산자를 이용해 배열로 만들 수 있다.
// 