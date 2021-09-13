import React, { Component } from 'react';

class Customer extends Component {
  render() {
    // 부모 Component로부터 전달받은 attribute 값 props 객체로 사용
    const {id, name, orders} = this.props;

    return (
      <div>
        <h2>{id}</h2>
        <p>
          <span>이름 : {name}</span> <br></br>
          <span>주문 수량 : {orders.length}개</span>
        </p>
      </div>
    );
  }
}

export default Customer;