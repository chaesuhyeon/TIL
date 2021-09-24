import React, { Component } from 'react';
import ProductCategoryView from '../view/ProductCategoryView';
import ProductView from '../view/ProductView';

import {observer} from 'mobx-react'
import ProductStore from '../store/ProductStore';

class ProductContainer extends Component {
  productStore = ProductStore

  render() {
    //  <ProductCategoryView/>
    //  <ProductView/>
    const rows = [];
    let lastCategory = null;
    const {filterText,  inStockOnly} = this.productStore
    const products = this.productStore.products;
    products.forEach((product)=>{
      // product.name에 filterText를 포함하지 않는 경우 row에 push하지 않음
      if(product.name.indexOf(filterText) ===  -1) return;

      //inStockOnly가 checked된 경우 product.stocked가 false인경우 row에 push하지 않음
      if(inStockOnly && !product.stocked) return;

      if(product.category !== lastCategory ){
        rows.push(
          <ProductCategoryView category={product.category} key={product.category} />
        )
      }
      rows.push(
        <ProductView product={product} key={product.name}/>
      );
      lastCategory = product.category
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

              <tbody>
                   {rows}
              </tbody>

            </table>
      </div>
    );
  }
}

export default observer(ProductContainer);