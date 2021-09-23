// import { makeAutoObservable, makeObservable, observable } from "mobx"
import { makeAutoObservable} from "mobx"
import generateId from "../IDGenerator"

class TodoStore {

  todo = {id:"", title:""}
  todos = [{"id":"1111", "title":"일정1"},{"id":"1112", "title":"일정2"}]

  constructor(){
    makeAutoObservable(this)
  }

  selectTodo = (todo) => {
    this.todo = todo
      
  }

  todoAdd=()=>{
    
    this.todos = this.todos.concat({...this.todo, id: generateId(5)})

  }

  setProps = ( name, value)=>{
     console.log(name,value)
      this.todo = {...this.todo, [name]:value} // 기존 properties에 name:value만 수정 
    
  }
  

   todoRemove = () => {
    
    this.todos = this.todos.filter((element)=> element.id !== this.todo.id)
    
  }

  todoModify=() => {
 
    this.todos = this.todos.map((element)=>(element.id === this.todo.id ? this.todo:element))

  }



}

export default new TodoStore();