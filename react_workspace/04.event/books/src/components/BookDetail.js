import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

class BookDetail extends Component {
  render() {
    const {book} = this.props;
  
    return (
      <Card>
      <Image src={book.imgUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header> {book.title}</Card.Header>
        <Card.Meta>
          <span>{book.author} </span> &nbsp; &nbsp;
          <span>{book.price} </span> &nbsp;&nbsp;
          <span>{book.publisher} </span></Card.Meta>
        <Card.Description>{book.introduce}</Card.Description>
      </Card.Content>
    </Card>
  
    );
  }
}

export default BookDetail;