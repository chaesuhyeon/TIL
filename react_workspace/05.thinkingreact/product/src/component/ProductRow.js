import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const {name, price ,stocked} = this.props.product;
    return (
      <tr>
        <td>{
        stocked ? (name)
        :( 
        <span style={{color :'red'}}> {name} </span>
        )
        }</td>
        
        <td>{price}</td>
        
        {/* <td>{this.props.product.name}</td>  {/*재사용 안할꺼면 const로 선언 안하고 그냥 이렇게 써도 됨 // {name} */     } 
        {/* <td>{this.props.product.price}</td>  {/*재사용 안할꺼면 const로 선언 안하고 그냥 이렇게 써도 됨 // {price}   */ } 
        {/* <td>{this.props.product.stocked}</td> */}
      </tr>
    );
  }
}

export default ProductRow;