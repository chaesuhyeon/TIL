import React, { Component } from 'react';

// state : component내에서 변경되는 데이터
//         생성자에서 초기화
//         값 변경 - setState를 사용하여 값변경
class Clock extends Component {
  //state초기화 
  constructor(props){
    super(props); // React.Component에 props 전달
    this.state = {
      date : new Date(),
    }
  }

  // mount 후 호출 lifecycle method
  
  componentDidMount(){
    this.timerID = setInterval(()=>this.setState({date:new Date()}),1000); // 1초에 한번씩 setState를 호출해서 값 변경
  }

  //unmount 호출 
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1> Hello, State Test </h1>
        <h2> It is {this.state.date.toLocaleTimeString()} </h2>
      </div>
    );
  }
}

export default Clock;