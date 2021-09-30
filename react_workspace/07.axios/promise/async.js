// 1. async - 비동기 코드를 쓰고 Promise를 더 읽기 더 쉽도록 만들어줍니다.

// function fectchUser(){
//   return new Promise((resolve, reject)=> {
//     resolve('cloudmsa');
//   }
//   );
// }

async function fectchUser(){
  return 'cloudmsa';
}
// const user = fectchUser().then((user)=>{console.log(user);}); // cloudmsa
// fectchUser().then(console.log)  // cloudmsa

const user = fectchUser();
console.log(user); // promise 객체  

fectchUser().then(console.log)  // cloudmsa

// 2. await - async function에서 사용 , 동기처럼 fullfilled 될때가지 차단
function delay(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function getOne(){
  await delay(3000); 
  return '1'
}

async function getTwo(){
  await delay(3000)
  return '2'
}

async function useAll(){
  const one = await getOne(); // fullfilled된 후 
  const two = await getTwo(); // getTwo 실행 

  return `${one} and ${two}`;
}

useAll().then(console.log)

// 병렬처리
function useAllParelle(){
  return Promise.all([getOne(), getTwo()])
                .then(list=>list.join(' and ')) 
}

useAllParelle().then(console.log)

//axios  - 브라우저가 제공하는  Http기반의 비동기 통신 
// XHR(XMLHttpReqiest)객체로 JSON 형태의 데이터를
// 비동기(Promise 객체)로 통신하는 라이브러리 제공 