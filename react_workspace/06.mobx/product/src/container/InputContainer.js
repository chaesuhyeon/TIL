import React, { Component } from 'react';
import {observer} from 'mobx-react'
import ProductStore from '../store/ProductStore';

class InputContainer extends Component {
  productStore = ProductStore

  render() {
    const {product, handlerAdd , handlerChange , handlerRemove , handlerModify} = this.productStore
    return (
      <div>
        <input type="text"  name= "category" value = {product.category} onChange={(e)=>handlerChange(e.target.value, e.target.name)} placeholder="Category"/><br/>
        <input type="text"  name= "name" value = {product.name} onChange={(e)=>handlerChange(e.target.value, e.target.name)} placeholder="Name"/><br/>
        <input type="text"  name= "price" value = {product.price} onChange={(e)=>handlerChange(e.target.value, e.target.name)} placeholder="Price"/>  <br/>

        재고 없음 : <input type= "checkbox" name ="stocked" checked={!product.stocked} onChange={(e)=>handlerChange(!e.target.checked, e.target.name)} /> <br/>
        <button onClick={()=>handlerAdd()} >ADD</button> &nbsp; 
        <button onClick={()=>handlerRemove()} >REMOVE</button> &nbsp; 
        <button onClick={()=>handlerModify()}>MODIFY</button>
    

      </div>
    );
  }
}

export default observer(InputContainer);