import React, { Component } from 'react';
import BookItem from './BookItem';

//부모 component App로 받은 books를 목록으로 출력하도록 rendering
class BookList extends Component {
  render() {
    const {books} = this.props;

    return (
      <div>
        <ul>
          {
          books.map(book => {
            return (
              <li><BookItem key={book.ISBN} book={book} /></li>
            )
          })
          }
        </ul>
        
      </div>
    );
  }
}

export default BookList;