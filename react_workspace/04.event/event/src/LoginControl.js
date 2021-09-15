import React, { Component } from 'react';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


class LoginControl extends Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn : false}; // default 값 false로 사용
  }

handlerLoginClick = () => {
  this.setState(
    {isLoggedIn : true
    });
}

handlerLogoutClick = () => {
  this.setState({
    isLoggedIn : false,
  });

}

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    //조건부 렌더링 : 삼항연산자 -->  조건식?(참일때 렌더링):(거짓일 때 렌더링)
    // 조건 만족시에만 렌더링 : && --> 조건식 && 렌더링  (조건식이 참이면 렌더링 되고, 거짓이면 렌더링 되지 않음.)
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (<LogoutButton logoutHandler = {this.handlerLogoutClick} />) : (<LoginButton loginHandler={this.handlerLoginClick} />)}
       
      </div>
    );
  }
}

export default LoginControl;