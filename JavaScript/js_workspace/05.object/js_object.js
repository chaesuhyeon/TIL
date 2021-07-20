/* http://json.org
Object : {key :value, key: value,...}
value : object, array, string, number, true, false, null
array : [value, value, ...]
*/



const car = {type:"Fiat" , model : "500", color :"white"};
console.log("The car type is " + car.type);
console.log("The car color is " + car["color"]);
// The car type is Fiat
// The car color is white

/*
javascript - string, number, boolean, null, undefined primittive  type
             String, Number, Bollean , 클래스 제공 . 모든것을 객체로 사용
*/