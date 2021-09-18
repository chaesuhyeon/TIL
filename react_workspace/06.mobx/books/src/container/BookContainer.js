import React, { Component } from 'react';
import { observer} from 'mobx-react'
import BookStore from '../store/BookStore';

import BookDetailView from '../components/BookDetailView';

class BookContainer extends Component {
  bookStore = BookStore
  render() {
    const {book} = this.bookStore;
    return (
      <div>
  <BookDetailView book={book} /> 

      </div>
    );
  }
}

export default observer(BookContainer);