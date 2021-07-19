// 
const cars = ["Saab", "Volvo", "BMW"];
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

for(index of cars){
  console.log(`for of loop : ${index}`)
}
/* for of loop : Saab
 for of loop : Volvo
 for of loop : BMW
*/

//
console.log(cars.join("-"))
/*     Saab-Volvo-BMW      */


console.log("pop된 데이터는 : " + cars.pop() + "이고" + " 그 후 cars는 : " + cars) // pop된 데이터는 : BMW이고 그 후 cars는 : Saab,Volvo

console.log("추가 한 후 array의 길이는 : " + cars.push("KIA")+"/ 데이터 추가 한 후 cars는 " +cars) // 추가 한 후 array의 길이는 : 3/ 데이터 추가 한 후 cars는 Saab,Volvo,KIA


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

cars.forEach(car=> console.log(`foreach : ${car}`));

/*
foreach : Saab
foreach : Volvo
foreach : KIA
*/

//
const array1 = [10,20,30];
array1.forEach((element,index)=>console.log(`array[${index}] = ${element}`))
/*
array[0] = 10
array[1] = 20
array[2] = 30
*/


//
const array2 = array1.map(element => element*2); // 새로운 배열 array2생성
console.log(`array1: ${array1} , array2 : ${array2}`)
// array1: 10,20,30 , array2 : 20,40,60


//
const array3 = array1.filter(element => element>15)
console.log(`array1: ${array1} , array3 : ${array3}`)
//array1: 10,20,30 , array3 : 20,30


//
const array4 = array1.reduce((accumulater,element) => accumulater + element , 100);
console.log(`array1: ${array1} , array3 : ${array4}`)
// array1: 10,20,30 , array3 : 160


















