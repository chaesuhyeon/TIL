function myfunction(p1,p2){
  return p1 * p2;
}
console.log(`myfunction(5,6) : ${myfunction(5,6)}`);
// myfunction(5,6) : 30


let hello;
hello = function(){
  return "Hello JavaScript"
}
console.log(hello()); // Hello JavaScript


// arrow function 
Hello = () => {
  return "Hello javascript"
}
console.log(Hello()); // Hello javascript

let hi;
hi = (val) => "hello" + val;
console.log(hi("javaScript")); // hellojavaScript

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("text의 길이는 : " + text.length); //text의 길이는 : 26

//
let str = "Apple, Banana, Kiwi";
console.log("slice 사용 : " + str.slice(7,13)); // slice 사용 : Banana
console.log("slice 사용 : " + str.slice(15,19)); // slice 사용 : Kiwi
console.log("substring 사용 : " + str.substring(7,13)); // substring 사용 : Banana
console.log("substring 사용 : " + str.substring(19,15)); // substring 사용 : Kiwi

//
str = "Please locate where 'locate' occurs!";
console.log("str에서 처음으로 나오는 locate는 " + str.indexOf("locate") + "번째에 존재"); // str에서 처음으로 나오는 locate는 7번째에 존재
console.log("str에서 마지막으로 나오는 locate는 " + str.lastIndexOf("locate") + "번째에 존재"); // str에서 마지막으로 나오는 locate는 21번째에 존재

//
console.log("str에서 처음으로 나오는 locate는 " + str.search("locate") + "번째에 존재"); // str에서 처음으로 나오는 locate는 7번째에 존재, search는 처음것만 찾아줌
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex)); // 43 (index 반환)
console.log(paragraph[paragraph.search(regex)]); // .
console.log(paragraph[43]); // .

//
console.log(paragraph.match(regex)); // [ '.', ',', '?' ]

text = "The rain in SPAIN stays mainly in the plain"; 
console.log(text.match(/ain/gi)); // [ 'ain', 'AIN', 'ain', 'ain' ] // gi : 대소문자 구분 x

//
console.log(text.includes("rain")); // true
console.log(regex.test(paragraph)); // true



















