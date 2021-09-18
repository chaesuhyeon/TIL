import { makeAutoObservable } from "mobx"

// 애플리케이션 상태를 모델링합니다. -state 관리할 클래스
class Counter{
  counter = 0 ; // observable state

  constructor() {
    makeAutoObservable(this) // mobx6 - observable 생성
  }  
  
  //computed
  get getCounter(){
    return this.counter;
  }

  //action 
  increase = ()=> {
    this.counter += 1;
}

 //action
  decrease = () => {
    this.counter -= 1;
  }


}

export default new Counter();