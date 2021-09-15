import React, { Component } from 'react';

class InputText extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : ' ',
    }
  }
  handleChange = (e) => {
    this.setState(
      {
      value : e.target.value,
      })
  }

  handleSubmit = (e) =>{
    alert("Text  Input name : " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name :
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} ></input>
          <input type="submit" value="Submit" ></input>
        </form>
      </div>
    );
  }
}

export default InputText;