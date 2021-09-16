import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    const {products, filterText, inStockOnly}=this.props;
    let lastCategory = null;
    const rows = []; // 배열로 초기화  
    products.forEach((product)=>{
      //filterText check
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      // stocked false check
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      
      rows.push(
        <ProductRow product={product} key={product.name} />
      );
      lastCategory= product.category;
    })
    return (
      <div>
         <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
}

export default ProductTable;