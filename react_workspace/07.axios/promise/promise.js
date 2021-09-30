
//1. synchronize , asynchronize

'use strict'

function print(){
  //async
  setTimeout(()=>{
    console.log('function');
  } , 5000);

  //sync // console.log('function')
}

console.log(1);
console.log(2);
console.log(3);

print()
console.log(4);


// 순서대로 실행 : 동기
// 되는 것 부터 실행? : 비동기 

// 2. Promise : 비동기 연산이 종료된 이후의 결과값이나 실패이유를 처리하기 위한 처리기를 연결 
// state : pending  --> fullfil 또는 reject
// provider , consumer

// 2.1 Promise provider
const promise = new Promise((resolve , reject)=>{
  setTimeout(()=>{
    resolve('Async Seccess')
    // reject(new Error('network error'));
  },1000);  // resolve가 1초 있다가 호출되는 코드 
});


// 2.2 Promise consumer (사용) // then : resolve / catch : reject / finally : 무조건 
promise.then((value)=> {console.log(value, typeof(value));}) // 사용할 때 promise 객체.then 해서 사용    // resolve 시 결과 값 : Async Seccess string
.catch(error=>{console.log(error);})  // 오류났을 때 실행되는 것  // reject 시 결과 값 : Error: network error at promise.js:34
.finally(()=>console.log('finally')); // 성공이든 실패든 무조건 실행되는 것 // resolve, reject 시 결과 값 : finally