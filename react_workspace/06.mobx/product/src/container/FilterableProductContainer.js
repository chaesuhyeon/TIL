import React, { Component } from 'react';
import ProductContainer from './ProductContainer';
import SearchBarContainer from './SearchBarContainer';
import {observer} from 'mobx-react'
import InputContainer from './InputContainer';

class FilterableProductContainer extends Component {
  render() {
    return (
      <div>
        <InputContainer/>
        <SearchBarContainer/>
        <ProductContainer/>
      </div>
    );
  }
}

export default observer(FilterableProductContainer);