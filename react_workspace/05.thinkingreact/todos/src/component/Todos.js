import React, { Component } from 'react';
import InputBar from './InputBar';
import TodoList from './TodoList';
import Tododata from './Tododata';


let nextId = 4;
let today = new Date()
class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:Tododata ,
      date : today.toLocaleDateString(),
      selectedTodo : null,
      todo : {}
    };
  }

 onInsertTodo = (text,date) =>{
  if (text ===""){
    return alert('할 일을 입력해주세요')
  } else {
    const todo = {
      id : nextId,
      text, date : today.toLocaleDateString(),
      checked : false
    };
      this.setState(
      {
       todos : this.state.todos.concat(todo)
      });
       nextId++;
    
  } //else
}; // oninserttodo



 onDelete = (id) => {
   this.setState({
     todos : this.state.todos.filter(todo => todo.id !== id)
   })
 }


// onCheckToggle : 체크박스 // checked :true 이면 체크된 아이콘, checked : false이면 체크안된 아이콘 넣는 이벤트. 클릭할때 반대로 바뀌는것
 onCheckToggle = (id) =>{
   this.setState({
     todos : this.state.todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked} : todo))
   })
 } 

 onChangeSelectTodo = (e) =>{
   this.setState({
     todos : this.state.todos
   }) 

 }

  render() {
    const {todos} = this.state
    return (
      <div>
        <h1>Todo List </h1>
        <InputBar onInsertTodo={this.onInsertTodo}  onChangeSelectTodo={this.onChangeSelectTodo} onDelete={this.onDelete}/> 
        <h4>일정 제목 --- 일정 날짜 ----- 삭제</h4>
        <p><TodoList todos={todos}  onCheckToggle={this.onCheckToggle} onDelete={this.onDelete} onChangeSelectTodo={this.onChangeSelectTodo}/></p>
      </div>
    );
  }
}

export default Todos;