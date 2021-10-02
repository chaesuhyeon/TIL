// import { makeAutoObservable, makeObservable, observable } from "mobx"
import { makeAutoObservable , runInAction} from "mobx"

import todoApi from "../api/TodoApi"

// import generateId from "../IDGenerator"


class TodoStore {

  todo = {id:"", title:""} //observable
  todos = [] //observable
 
  message = "";  //observable

  constructor(){
    makeAutoObservable(this,{},{autoBind:true}) // autobind
  }

  // selectTodo (todo){
  //   this.todo = todo
      
  // }


  async selectTodo (todo){
    this.todo = todo
      
  }

  async todoAdd(){
    try {
      await todoApi.todoCreate(this.todo.title);
      this.selectAll();
    } catch(error){
      runInAction(this.message = error.message);
    }
    this.init()
  }

  setProps( name, value){
     console.log(name,value)
      this.todo = {...this.todo, [name]:value} // 기존 properties에 name:value만 수정 
    
  }
  

  async todoRemove() {
    try {
      await todoApi.todoDelete(this.todo.id);
      this.selectAll();
    } catch(error){
      runInAction(this.message = error.message);
    }
  
    this.init()
  }

  async todoModify() {
    try {
      await todoApi.todoUpdate(this.todo.id, this.todo.title);
      this.selectAll();
    } catch(error){
      runInAction(this.message = error.message);
    }
    this.init()
  }


  init(){
    this.todo = {id : "" , title : ""}
  }


 // 전체 목록 가져오기 
  async selectAll(){
  try {
    const result = await todoApi.todoList();
    runInAction(()=>{this.todos = result
  });
} catch(error){
  console.log(error)
  runInAction(()=>this.message=error.message);
}
  }
}

export default new TodoStore();