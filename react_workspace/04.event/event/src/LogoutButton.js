import React, { Component } from 'react';

class LogoutButton extends Component {
  render() {
    const {logoutHandler} = this.props;
    return (
      <div>
        <button onClick = {logoutHandler} >
        Logout</button>
      </div>
    );
  }
}

export default LogoutButton;