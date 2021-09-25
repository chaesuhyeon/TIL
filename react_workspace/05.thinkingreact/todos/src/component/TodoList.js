import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component {
  render() {
    const {todos,  onCheckToggle , onDelete ,  onChangeSelectTodo } = this.props;
    const todoList = todos.map(todo =>{
      return (
        <Todo key={todo.id} todo={todo}  checked={todo.checked}  id = {todo.id}  onCheckToggle={onCheckToggle}  onChangeSelectTodo={onChangeSelectTodo} onDelete={onDelete}  />)
    }) 
    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoList;