class Car{
  constructor(name,year){
    this._name = name;
    this._year = year;
  }
  age(){
    let date = new Date();
    return date.getFullYear() - this._year;
  }
  getName(){
    return this._name;
  }

  setName(name){
    this._name = name;
  }
//   get name(){
//     return this._name;
//   }

//   set name(name){
//     this._name = name ;
//  }
}


let myCar = new Car("Ford", 2014);
console.log(`My car is ${myCar.age()} years old.`)  // My car is 7 years old.
// myCar.name = "BMW";  -- set name(){}
myCar.setName("BMW");
// console.log(`My car changed  : ${myCar.name}`) // My car changed  : BMW
console.log(`My car changed  : ${myCar.getName()}`)