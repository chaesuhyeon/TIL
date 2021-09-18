import React, { Component } from 'react';
import {observer} from 'mobx-react'
import BookStore from '../store/BookStore';
import { Item } from 'semantic-ui-react'
import BookItemView from '../components/BookItemView';

class BookListContainer extends Component {
  bookStore = BookStore;
  render() {
    const {books, selectBook} = this.bookStore;
    const bookList = books.map(book => {
      return (
       <BookItemView key={book.ISBN} book={book} onSelect={selectBook} />)});

    return (
      
        <Item.Group>
        {bookList}
        </Item.Group>
    );
  }
}

export default observer(BookListContainer);