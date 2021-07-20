//1. 함수 정의
// function functionName(parameterList){
//   구현
//   return 함수 호출하는 곳에 전달할 데이터;
// }

function add(data1,data2){
  let localVariable = 100;
  return data1 +" + "+ data2 + " = " +(data1 +data2);
}

// 함수 호출(사용)
// 변수명 = 함수명(argumentList);
// argumentList는 함수정의된 parameterList와 개수 일치

let sum = add(10,20); // data1 = 10 , data2 =20
console.log(sum);

// localVariable은 함수 내에서만 사용 가능
// console.log(data1,data2,localVariable); // undefinded
console.log(typeof localVariable);


// 2. Arrow function :       함수 이름 없이 일회성으로 사용하는 경우 
// (ES6)버전에서 사용가능    arrow function(=>) 사용가능
// 변수명 = function(parameterList){    // parameterList는 없어도 됨 
//            return returndata;
//}
// arrow function
// 변수명 = (parameterList) => returnData;
// 사용 : 변수명(argumentList);
hello = (val) =>"Hello" +val;   // 일급 함수 이기 때문에 함수를 변수로 할당? 가능하다
console.log(hello("JavaScript")); // HelloJavaScript


//3. JavaScript - 일급함수 : 함수를 변수로 사용 가능




