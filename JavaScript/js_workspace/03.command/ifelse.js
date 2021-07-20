// 조건문
/*
if (조건식1){
  조건식 1이 참일 때 실행문;
} else if(조건식2) {
  조건식 2가 참일 때 실행문;
} else {
  거짓일 때 실행문;
}
*/

let month = 3;
if (month==1||month==3||month==5||month==7||month==8||month==10||month==12){
  console.log(month,"월은 31일까지 있는 달 입니다.");
} else if (month==2){
  console.log(month,"월은 28일까지 있는 달 입니다.");
} else if (month==4||month==6||month==9||month==11){
  console.log(month,"월은 30일까지 있는 달 입니다.");
} else {
  console.log(month,"월은 없는 달이네요...");
}


month = 20;
if (month==1||month==3||month==5||month==7||month==8||month==10||month==12){
  console.log(month,"월은 31일까지 있는 달 입니다.");
} else if (month==2){
  console.log(month,"월은 28일까지 있는 달 입니다.");
} else if (month==4||month==6||month==9||month==11){
  console.log(month,"월은 30일까지 있는 달 입니다.");
} else {
  console.log(month,"월은 없는 달이네요...");
}