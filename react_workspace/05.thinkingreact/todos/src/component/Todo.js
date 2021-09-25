import React, { Component } from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import {TiTrash} from 'react-icons/ti'

class Todo extends Component {
  render() {
    const {id, todo , checked , onCheckToggle , onChangeSelectTodo, onDelete} = this.props
    return (
      <div>
      <div className={`content ${checked ? "checked" : "" }`}>
      <div>{checked ? <MdCheckBox onClick={()=>{onCheckToggle(id)}} /> : <MdCheckBoxOutlineBlank onClick={()=>{onCheckToggle(id)}} />}
      <span  onClick={()=>{onChangeSelectTodo(todo)}}>{todo.text} --- {todo.date}</span> &nbsp; ------ <TiTrash onClick={()=>{onDelete(todo.id)}}/></div>
      </div>
      </div>

    );
  }
}

export default Todo;