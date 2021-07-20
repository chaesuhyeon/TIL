//변수 선언하기 
// 선언한 변수에 값은 안들어가서 '값 할당 하기 전 변수 값 :  undefined' 라고 나옴 (타입을 모르니까)
var v; //Deprecated -예전 버전 것
let l; //ES5, ES6 버전부터 사용가능
console.log("값 할당 하기 전 변수 값 : " , l); //undefined  

y =30;
console.log(y); //let이나 var로 변순 선언안해도 오류 안남 그대로 30이 출력됨. 나중에 함수에서 달라짐


// 값을 할당 - 동적타입 : 값이 할당될 때 변수 type 결정
v=10;
l=20;
console.log("값 할당 후 변수 값 : " , l);

//변수 선언과 값 할당
let z = v+l;
console.log("변수 선언과 동시에 값 할당 : ", z);

// 변수명 - 첫글자는 문자 or _(underbar) or $ 로 시작.
// for = 10; 같이  변수명으로 keyword 사용 안됨(for가 keyword. 기능이있음)
// 1x =10; 같이 첫 글자로 숫자 안됨.
// 대소문자 구별함.

//let z =100;
//console.log("같은 이름의 변수 선언 : ",z) // SyntaxError: Identifier 'z' has already been declared

z =100;
console.log("같은 이름의 변수 선언 : ",z) // z 값 변경

z ="100"; // 문자 타입으로 변경 
console.log("같은 이름의 변수 선언 : ",z)

//global variable
var gv=100;
let globalVariable = 100;

{
  //local variable
  var gv =50
  let globalVariable =50

}

console.log("global variable : var 선언한 경우",gv) // var을 사용하여 변수를 선언할 경우 local variable에서 선언된 값으로 값 변경
console.log("global variable : let 선언한 경우",globalVariable) // global variable 변수 값으로 유지. local variable 변수는 { } 안에서 끝남

//const PI = 3.141592; // read only. 선언하는 순간 값 변경x. 값 변경 없는 상수
//PI = 3.14; // TypeError: Assignment to constant variable.

const arr = [10,20,30,40,50]; // 배열 상수
console.log("before : ",arr)
arr[0]=1; // index 1의 값 변경
console.log("after : " ,arr) // after :  [ 1, 20, 30, 40, 50 ]
// arr = ["1","2","3"]  -> TypeError: Assignment to constant variable. 전체를 바꾸는건 안됨

const obj = {"name" : "조성훈", "age":29, "major":"경영학"}; // 객체 상수
console.log("before : " ,obj)
obj["major"] = "클라우드MSA"
console.log("after : ",obj) // after :  { name: '조성훈', age: 29, major: '클라우드MSA' }

// obj={"name":"송민주", "age":31, "major":"조리외식경영"}
// TypeError: Assignment to constant variable.
// obj에다가 다시 할당하게 되면, 주소 값이 바뀌어서 오류남.


