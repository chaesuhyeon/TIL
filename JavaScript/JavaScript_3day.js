let x = 0;

switch(x){
  case 0:
    console.log("off")
    break
  case 1:
    console.log("on")
  default:
    console.log("No value found")
}
// off

x = 1;

switch(x){
  case 0:
    console.log("off");
    break;
  case 1:
    console.log("on");
    break;
  default:
    console.log("No value found");
}
// on

x = 20;

switch(x){
  case 0:
    console.log("off");
    break;
  case 1:
    console.log("on");
    break;
  default:
    console.log("No value found");
}
// No value found

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text =""
for(let i =0; i<cars.length; i++){
  console.log(cars[i])
}
/*
BMW
Volvo
Saab
Ford
Fiat
Audi
*/

let j = 2;
let len = cars.length;
let txt="";

for(; j <len;j++){ //2,3,4,5
  console.log(cars[j])
}
/*
Saab
Ford
Fiat
Audi
*/

const person = {fname:"John", lname:"Doe", age:25}; 
let per = ""
for(let r in person){
  per = r + " : " + person[r]
  console.log(per)
}

/*
fname : John
lname : Doe
age : 25
*/

let car = ""
for(let car of cars ){
  console.log(car) 
}

/*
BMW
Volvo
Saab
Ford
Fiat
Audi
*/