import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    const {isLoggedIn} = this.props;
    if(isLoggedIn) {
    return (
      <div>
       <h1> Welcome back! </h1>
      </div>
    );
    }else {
      return(
        <div>
         <h1> Please Sign Up.</h1>
        </div>
      )
    }
  }
}

export default Greeting;