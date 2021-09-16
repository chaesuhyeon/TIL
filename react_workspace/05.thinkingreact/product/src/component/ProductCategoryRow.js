import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
      <th colSpan="2"> 
      {/* 2열이 하나로 합해짐 셀병합 같은거  */}
        {this.props.category}
      </th>
    </tr>
    );
  }
}

export default ProductCategoryRow;