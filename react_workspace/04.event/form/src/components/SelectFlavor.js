import React, { Component } from 'react';

class SelectFlavor extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'coconut.'
    }
  }

 handleChange = (e)=>{
  this.setState({
    value : e.target.value,
  });
 }

 handleSubmit = (e)=>{
  alert('Your favorite flavor is: ' + this.state.value);
  e.preventDefault();
}

  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite flavor:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default SelectFlavor;