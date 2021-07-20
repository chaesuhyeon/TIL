// 조건문
/*
switch(expression){             expression      실행
  case 값1 :                      값1           실행문1, 실행문2, 실행문3
    실행문1;
  case 값2 :                      값2           실행문2, 실행문3
    실행문2;
  case 값3 :                      값3           실행문3
    실행문3
    break;
  case 값4 :                      값4           실행문4
    실행문4
    break;
  dafault :                 값1~4가 아닌 값 ->  그 외 실행문
    그외 실행문;
}
*/


let month = 3;
switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(month,"월은 31일까지 있는 달 입니다.");
    break
  case 2:
    console.log(month,"월은 28일까지 있는 달 입니다.");
    break
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(month,"월은 30일까지 있는 달 입니다.");
    break
  default :
    console.log(month,"월은 없는 달이네요...");
  
}
// 3 월은 31일까지 있는 달 입니다.

month = 4;
switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(month,"월은 31일까지 있는 달 입니다.");
    break
  case 2:
    console.log(month,"월은 28일까지 있는 달 입니다.");
    break
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(month,"월은 30일까지 있는 달 입니다.");
    break
  default :
    console.log(month,"월은 없는 달이네요...");
  
}
// 4 월은 30일까지 있는 달 입니다.


month = 21;
switch(month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(month,"월은 31일까지 있는 달 입니다.");
    break
  case 2:
    console.log(month,"월은 28일까지 있는 달 입니다.");
    break
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(month,"월은 30일까지 있는 달 입니다.");
    break
  default :
    console.log(month,"월은 없는 달이네요...");
  
}
// 21 월은 없는 달이네요...