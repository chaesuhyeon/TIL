/*
  continue : 밑에 실행문 시작하지 않고 loop로 돌아가기
  break : 명령문 빠져나가기
  return : 함수 빠져나가기
*/

// 홀수 출력
for(let i =1; i<11; i++){
  if(i %2 == 0) continue;
  console.log(i)
}
/*
1
3
5
7
9
*/