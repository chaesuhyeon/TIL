import React, { Component } from 'react';
import FilterableProductTable from './component/FilterableProductTable';
import Products from './Product';

class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductTable products ={Products}/>
      </div>
    );
  }
}

export default App;