import React, { Component } from 'react';
import ProductStore from '../store/ProductStore';
import {observer} from 'mobx-react'

class SearchBarContainer extends Component {
  productStore = ProductStore
  render() {
    return (
      <div>
        
        <form>

          <input type="text" placeholder="Search..." value={this.productStore.fillterText} onChange = {(e)=>this.productStore.handlerFilterTextChange(e.target.value)}/>
          <p>
          <input type="checkbox" checked={this.productStore.inStockOnly}  onChange={(e)=> this.productStore.handlerInStockChange(e.target.checked)} />&nbsp; Only show products in stock
         </p>

        </form>

      </div>
    );
  }
}

export default observer(SearchBarContainer);