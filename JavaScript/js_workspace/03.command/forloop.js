// 반복문
/*
  for(초기값; 조건식; 증감식){
    참일 때 실행문;
  }

  초기값 -> 조건식-> 참일 때 실행문 실행 
  ->( 증감식 -> 조건식 체크 -> 참이면 참일때 실행문 실행됨) 반복 -> 조건식이 거짓일 때 종료

for(index in 객체,배열){
  데이터 존재하는 동안 실행할 실행문;
}


for( value of 배열,문자열,NodeList){
  데이터 존재하는 동안 실행할 실행문;
}


//while 문은 초기식이 반드시 있어야함
초기식;
while(조건식){
  참일때 실행문;
  증감식;
}
초기식 -> 조건식 -> 실행문 -> 증감식 -> (조건식 -> 실행문 -> 증감식)반복 -> 



  */


// for

for(let i = 1; i<11 ; i++){
  console.log(i)
}
/*
1
2
3
4
5
6
7
8
9
10
*/

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for(let index=0; index <cars.length; index ++){
  console.log(cars[index])
}

/*
BMW
Volvo
Saab
Ford
Fiat
Audi
*/


//  for in loop

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += x+":" + numbers[x]+"\t" ; 
}
console.log("for in loop object : ",txt)
// for in loop object :  0:45      1:4     2:9     3:16    4:25

const person = {fname:"John", lname:"Doe", age:25}; 

let text = "";
for (let x in person) {  // x key(x)
  text += x+":" + person[x] + " ";
}
console.log("for in loop array : ",text)
// for in loop array :  fname:John lname:Doe age:25



// for of loop 
//const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]; 
//const는 값변경 안됨.(주소 달라져서)
//cars[0]이렇게는 주소가 달라지는게 아니라서 값변경 가능

let carsText = "";
for (let x of cars) {  // for(let x in cars){
  carsText += x +"\t"; //   carsText += cars[x] +"\t"; }
}
console.log(carsText);
// BMW     Volvo   Saab    Ford    Fiat    Audi
// for x in ~ 이면 , 여기 x 에는 index가 할당됨
// for x of ~ 이면, x에는 값 자체가 할당됨


//while loop
//while은 초기식 무조건 있어야함
let loopIndex=1;
while(loopIndex < 11){
  console.log(loopIndex);
  loopIndex ++;
}
/*
1
2
3
4
5
6
7
8
9
10
*/











