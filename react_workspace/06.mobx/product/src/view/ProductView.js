import React, { Component } from 'react';
import ProductStore from '../store/ProductStore';

class ProductView extends Component {
  productStore = ProductStore
  render() {
    const {product} = this.props;
    const {handlerSelect} = this.productStore
    return (
        <tr>
        <td onClick={()=> handlerSelect(product)} >{product.stocked ? (product.name) :(<span style={{color:'red'}}>{product.name}</span>)}</td>
        <td onClick={()=> handlerSelect(product)} >{product.price}</td>  
        </tr>
    );
  }
}

export default ProductView;