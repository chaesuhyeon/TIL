import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import BookStore from '../store/BookStore';

class BookDetailView extends Component {
  bookStore = BookStore;
  render() {
    const {book , selectKeyword} = this.bookStore;
  
    return (
      <Card>
      <Image src={book.imgUrl} wrapped ui={false} onClick={()=>selectKeyword(book)} />
      <Card.Content>
        <Card.Header onClick={()=>selectKeyword(book)} > {book.title}</Card.Header>
        <Card.Meta>
          <span >{book.author} </span> &nbsp; &nbsp;
          <span >{book.price} </span> &nbsp;&nbsp;
          <span >{book.publisher} </span></Card.Meta>
        <Card.Description>{book.introduce}</Card.Description>
      </Card.Content>
    </Card>
  
    );
  }
}

export default BookDetailView;