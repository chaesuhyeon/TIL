// Array Iteration
// foreach(callback(element, index, array))
const array1 = [10,20,30];   // const array1 = ['a','b','c'];
//array1.forEach(element => console.log(element));
// = for(element of array1) console.log(element)

// expected output: "a"
// expected output: "b"
// expected output: "c"

array1.forEach((element,index)=> console.log(`array[${index}] = ${element}`));
/*
array[0] = a
array[1] = b
array[2] = c
*/

// *map(callback(element, index, array)) : 반복을 통해 데이터처리 후 새로운 배열 생성하여 return

const array2 = array1.map(element =>  element*2);
console.log(`array1: ${array1} , array2 : ${array2}`)
// array1: 10,20,30 , array2 : 20,40,60

// *filter(callback(element, index, array)) : 반복을 통해 조건에 맞는 데이터로 새로운 배열을 생성하여  return
const array3 = array1.filter(element => element >15);
console.log(`array1: ${array1} , array3 : ${array3}`)
// array1: 10,20,30 , array3 : 20,30

// *reduce(callback(accumulater, element, index, array),initialvalue) : 반복을 통해 데이터 처리한 accumulater return
// initial value - 100
const array4 = array1.reduce(
  (accumulater, currentValue) => accumulater + currentValue,100
); // 160 (100 + 누적)
console.log(`reduce result : ${array4}`, typeof array4); // reduce result : 160 number