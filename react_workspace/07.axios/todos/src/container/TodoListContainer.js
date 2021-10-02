import React, { Component } from 'react';
import {observer} from 'mobx-react'
import TodoStore from '../store/TodoStore';
import TodoItemView from '../components/TodoItemView';

class TodoListContainer extends Component {
  todostore = TodoStore;
 componentDidMount(){
   this.todostore.selectAll(); // 맨처음 mount 되면 일정목록 호출 
 }
  render() {
  const {todos, selectTodo} = this.todostore
  const todoList = todos.map(
    (todo,index)=>{
      return  <span onClick={()=>selectTodo(todo)} key={index}> <TodoItemView key={todo.id} todo={todo} /></span>
    }
  );
  return (
      <div>
        <h3>일정 목록</h3>
       
       {
         Array.isArray(todos) && todos.length  ? 
         (todoList) : 
         (<span>Empty</span>)
       }
      </div>
    );
  }
}

export default observer(TodoListContainer);