import React, { Component } from 'react';

class LoginButton extends Component {
  render() {
    const {loginHandler} = this.props;
    return (
      <div>
        <button onClick = {loginHandler} >
        Login</button>
      </div>
    );
  }
}

export default LoginButton;