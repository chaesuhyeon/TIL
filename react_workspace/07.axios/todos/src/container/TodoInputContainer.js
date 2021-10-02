import React, { Component } from 'react';
import TodoStore from '../store/TodoStore';
import {observer} from 'mobx-react'

class TodoInputContainer extends Component {
  todostore = TodoStore;
  render() {
    const {todo , setProps, todoAdd, todoRemove, todoModify  } = this.todostore
    return (
      <div>
      Title : <input type="text" name="title" value = {todo.title} onChange={(e)=>setProps(e.target.name, e.target.value)} placeholder="일정입력" /><br/>
      <button onClick={()=>todoAdd()}>ADD</button> &nbsp; 
      <button onClick={()=>todoRemove()}>REMOVE</button> &nbsp; 
      <button onClick={()=>todoModify()}>MODIFY</button>
    </div>
    );
  }
}

export default observer(TodoInputContainer);