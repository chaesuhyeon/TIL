let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("txt 문자열 길이",txt.length) // new String(txt) 생성된것
console.log(`${txt}:문자열 길이 ${txt.length}`) // new String(txt); properties:length 문자열 길이 // ' '(single) 아니고 ` `(back)임
// txt 문자열 길이 26
// ABCDEFGHIJKLMNOPQRSTUVWXYZ:문자열 길이 26

// 1. String methods
// slice(index_start, index_end)
let str = "Apple, Banana, Kiwi";
console.log(`slice: ${str.slice(7, 13)}`) // index : 0부터 ,  7번째 ~ 13-1까지  // slice: Banana

// substring(index_start, index_end)
console.log(`substring : ${str.substring(7,13)}`) // substring : Banana

// slice vs substring  start index > end index 일 경우 
console.log(`slice: ${str.slice(13, 7)}`) ;  // slice는 13번째 이후에 잘라낼 7번째 글자까지 없기 때문에 공백으로 리턴
console.log(`substring : ${str.substring(13,7)}`) ; // substring은 뒤에 글자가충분하지 않으면 7~13으로 추출
// slice:             // 공백문자로 리턴
// substring : Banana

// 2. String search
// indexOf(searchvalue) : 검색한 첫번째 index return
// lastIndexOf(searchvalue) : 검색한 마지막번째 index return
str = "Please locate where 'locate' occurs!";
console.log(`${str} indexOf locate검색 : ${str.indexOf("locate")}`); // Please locate where 'locate' occurs! indexOf locate검색 : 
console.log(`${str} lastindexOf locate검색 : ${str.lastIndexOf("locate")}`); // Please locate where 'locate' occurs! lastindexOf locate검색 : 21
// index 까지 굳이 알필요가 없을때 indexOf 결과값 >0 이면 존재한다 ~ 이런식으로도 사용 가능

//정규표현식 검색
// str.search(regexp) : 정규표현식으로 검색 , index나 -1 return
// str.match(regexp) : 정규표현식 검색, 배열 또는 null return // new RegExp(regexp).exec(string)
// exec() 메서드는 주어진 문자열에서 일치 탐색을 수행한 결과를 배열 혹은 null로 반환
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g; // word가 아니고 string이 아닌것은? . , ? 를 찾으라는말

console.log(paragraph.search(regex)); // index를 찾아라
// expected output: 43      

console.log(paragraph[paragraph.search(regex)]); // 그 index에 해당하는 값이 무엇이냐~
// expected output: "."

console.log(paragraph.match(regex));
// expected output: [ '.', ',', '?' ] //  배열로 return

const regexObject = (/[^\w\s]/,'g');
results = regex.exec(paragraph); // 패턴 검색한 첫번째 데이터 정보 배열 또는 null return 
console.log(typeof results, results instanceof Array); // true - 배열이 return
console.log(regex.test(paragraph)); // true (paragraph 가 문장에 있으므로 true)// 패턴 검색한 데이터 존재여부 true 또는 false return


// 문자열 포함 여부 검색
// str.includ(searchValue) - true || false return

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);  
// 삼항 연산자 조건식 :  참일 때 값 : 거짓일 때 값
// Template Literal ``(back ticks) - \n , '', "", ${javascript변수}, ${javascript표현식} 사용 가능
// ${sentence.includes(word) ? 가 참이면 'is' , ${sentence.includes(word) ? 가 거짓이면 'is not' 
// expected output: "The word "fox" is in the sentence"    //fox라는 문자열이 포함되고 있기 때문에 is 로 return

















