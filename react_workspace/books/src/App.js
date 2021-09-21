import React, { Component } from 'react';
import BookList from './components/BookList';
import Books from './Books';

class App extends Component {
  render() {
    const books= Books // Books.js - books
    return (
      <div>
        <BookList books = {books}/>
      </div>
    );
  }
}

export default App;