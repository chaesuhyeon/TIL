import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {filterText, inStockOnly, onSearch, onStockOnly} = this.props;
    return (
      <div>
        <form>
        <input type="text" placeholder="Search..." value={filterText} onChange={(e)=>onSearch(e.target.value)}/>
        <p>
          <input type="checkbox" checked={inStockOnly} onChange={(e)=>onStockOnly(e.target.checked)} />
          {' '}Only show products in stock
        </p>
        </form>
      </div>
    );
  }
}

export default SearchBar;