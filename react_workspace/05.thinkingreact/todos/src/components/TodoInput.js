import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    const {todo, onAdd, onRemove, onModify , onSetProps} = this.props
    return (
      <div>
        Title : <input type="text" name="title" value = {todo.title} onChange={(e)=>onSetProps(e.target.name, e.target.value)} placeholder="일정입력" /><br/>
        <button onClick={()=>onAdd()}>ADD</button> &nbsp; 
        <button onClick={()=>onRemove()}>REMOVE</button> &nbsp; 
        <button onClick={()=>onModify()}>MODIFY</button>
      </div>
    );
  }
}

export default TodoInput;