class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car { // class 상속
  constructor(brand, mod) {
    super(brand); //부모생성자 호출
    this.model = mod;
  }
  present() { //overriding
    return super.present() + ', it is a ' + this.model;
  }
}

let mycar = new Model("Ford", "Mustang");
console.log(mycar.present()); // overried method 응답
// I have a Ford, it is a Mustang