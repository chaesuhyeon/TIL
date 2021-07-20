// 배열 - 하나의 변수에 여러 데이터를 저장 , 관리
// 배열 이름 = [value, value , ...]  // = new Array(value, value, ...)
// value : string , number, null, true, false, object, array 가 value로 올 수 있음.
// Array : length - 배열의 길이
// 배열 접근 : index = 0~ length-1 , 배열명[index], IndexError 주의 
 
const cars = ["Saab", "Volvo", "BMW"]; // const로 선정된 것은 주소변경 x , 값 자체는 바꿀 수 있음. cars[0] , cars[1], cars[2] 값들을 각각 바꿀 수있음

for(let index=0;index<cars.length;index++){
  console.log(`cars array [${index}] = ${cars[index]}`);
}
/*
cars array [0] = Saab
cars array [1] = Volvo
cars array [2] = BMW
*/

for(index in cars){
  console.log(`for in loop ${index} = ${cars[index]}`);
}
/*
for in loop 0 = Saab
for in loop 1 = Volvo
for in loop 2 = BMW
*/

for(car of cars){
  console.log(`for of loop : ${car}`);
}
/* for of loop : Saab
 for of loop : Volvo
 for of loop : BMW
*/


//Array method
// join(seperator*) : 배열 element seperator로 구분해서 문자열로 리턴 
console.log(cars.join("-"));
/*     Saab-Volvo-BMW      */


// 배열 element 삭제 -> pop( ): 마지막 element 삭제하고 return, empty인 배열 - undefined return
console.log(`before : ${cars} , cars.pop():${cars.pop()} , after : ${cars}`);
/*  before : Saab,Volvo,BMW , cars.pop():BMW , after : Saab,Volvo  */

// 배열 element 추가 ->  push(elementList) : 배열에 element 추가(append) 후 length return
console.log(`before : ${cars} , cars.push():${cars.push("KIA", "HYUNDAI")} , after : ${cars}`);
/*  before : Saab,Volvo , cars.push():4 , after : Saab,Volvo,KIA,HYUNDAI             여기서 4는 array의 길이  */  


// 배열 삭제 : delete
delete cars[cars.length-1];
console.log(`length-1 마지막 index element 삭제 후 ${cars} `);
/*  length-1 마지막 index element 삭제 후 Saab,Volvo,KIA,  */

// splice(startIndex, deleteCount, itemList)  : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 삽입하여 배열의 내용을 변경
const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');// inserts at index 1   // deleteCount 가 0이면 삭제 안시키는것.
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');// replaces 1 element at index 4  // 4번째 index 부터 1개를 삭제시키고 (4번째 June 삭제) May추가
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

months.splice(4, 1); // = delete 1 element at index 4
console.log(months);
//  expected output: Array [ 'Jan', 'Feb', 'March', 'April' ]


// newArray = array.concat(appendArray) : 배열에 값 추가 후 새로운 배열 return     
// push랑은 다름. push는 배열 주솟값은 같고 배열의 값만 변경. concat은 주소자체가 아예 다른 새로운 배열 생성
// push() - append시 array ref 변경 x - 기존배열의 length변경

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(`array1 concat전의 데이터 유지 : ${array1}, array2 : ${array2}, 새로운배열인 array3 : ${array3}`); // 기존배열 유지 새로운 배열 ref 리턴
/*     array1 concat전의 데이터 유지 : a,b,c, array2 : d,e,f, 새로운배열인 array3 : a,b,c,d,e,f     */
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


//array.slice(start, end) : array의 start ~ end-1 까지 새로운 배열로 return.  start와 end는 생략 가능

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2),animals); //원본 배열은 그대로 유지 됨 -> 새로운 배열의 생성
// expected output: Array ["camel", "duck", "elephant"]  [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"] 

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"] 

const newAnimals = animals.slice();           // --> ※ 주의 - shallow copy(얕은 복사) :  
newAnimals[0] = "dog" //newAnimals 변경
console.log(newAnimals,animals); // newAnimals의 배열값을 변경해도 원본 배열은 유지
// [ 'dog', 'bison', 'camel', 'duck', 'elephant' ] [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]


// foreach() :  배열 for loop로 처리  
cars.forEach(car => console.log(`foreach : ${car}`)) 

/*
foreach : Saab
foreach : Volvo
foreach : KIA
*/

























