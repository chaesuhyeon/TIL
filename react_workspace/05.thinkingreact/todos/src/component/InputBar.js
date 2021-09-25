

import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
     value : '',
    };
  }


 onChange = (e) =>{
  this.setState(
    {value : e.target.value},
    )
};



// handlerOnClick = (e) => {
//    const {todo} = this.state
//    alert(todo);
//    e.preventDefault();
//  }

  render() {
    const {value } = this.state
    const {onInsertTodo, onChangeSelectTodo} = this.props
    
    return (
      <div>
        <form> 
        {/* <input type="textarea"  placeholder="write contents" value={this.state.todo}  onChange={this.handlerOnChange} /><button onClick={this.handlerOnClick}>Add</button> */}
        {/* <input type="textarea" placeholder="write contents" value={value}  onChange={this.onChange}/><button type = "submit ">Add</button> */}
        <input type="text" placeholder="write contents" value={value}  onChange={this.onChange} onChangeSelectTodo={(e)=>{onChangeSelectTodo(e.target.value,"text")}}/>
    
        <button onSubmit={onsubmit=(e)=>{onInsertTodo(value); e.preventDefault();}} >Add</button>
        </form>
        
      </div>
      
    );
  }
}

export default InputBar;