import React, { Component } from 'react';
import {observer} from 'mobx-react'
import BookStore from '../store/BookStore';
import { Item } from 'semantic-ui-react'
import BookItemView from '../components/BookItemView';

class BookListContainer extends Component {
  bookStore = BookStore;

  componentDidMount(){
    this.bookStore.selectAll(); // 맨처음 mount 되면 책 목록 호출 
  }

  render() {
    const {books, selectBook, selectKeyword} = this.bookStore;
    const bookList = books.map(book => {
      return (
       <BookItemView key={book.id} book={book} onSelect={selectBook} onClick={()=>selectKeyword(book)} />)});

    return (
      
        <Item.Group>
        {bookList}
        </Item.Group>
    );
  }
}

export default observer(BookListContainer);