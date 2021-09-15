import React, { Component } from 'react';
import BookItem from './BookItem';
import { Item } from 'semantic-ui-react'

//부모 component App로 받은 books를 목록으로 출력하도록 rendering
class BookList extends Component {
  render() {
    const {books, onSelect} = this.props;
    const bookList = books.map(book => {
      return (
       <BookItem key={book.ISBN} book={book} onSelect={onSelect} />)});

    return (
      
        <Item.Group>
        {bookList}
        </Item.Group>
      
    );
  }
}

export default BookList;