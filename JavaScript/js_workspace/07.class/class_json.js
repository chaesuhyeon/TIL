var Car = {
  name : "ford",
  age : 14,
  info : function(){
    return this.name + this.age;

  } ,
 get info2(){
   return this.name +this.age;
 }
}

Car.getAge(); // age

console.log(Car.info()); // info 함수 호출
console.log(Car.info2); // get info호출          ( 값을 넣는건 set 사용 )