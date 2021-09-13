import React, { Component } from 'react';
import Customer from "./Customer"
import Book  from './Book';
//JSX & props
class yart extends Component {
  render() {
    return (
      <div>
        {/* props : 자식Component에 전달할  attribute데이터 저장 - read only */}
        <Customer id="ddd8177@gmail.com" name = "student" orders={["ISBN 111-234","ISBN 222-234","ISBN 333-234" ]} />
        <Book isbn = "ISBN 111-234" author="su" title="React" />
      </div>
    );
  }
}

export default yart;