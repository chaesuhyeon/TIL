import React, { Component } from 'react';
import { Item } from 'semantic-ui-react'


// 부모 component인 Booklist로부터 받은 props book 데이터를 출력
class BookItemView extends Component {
  render() {
    const {book, onSelect} = this.props
    return (
      
      <Item onClick={()=>onSelect(book)} >
         <Item.Image size='tiny' src={book.imgUrl}/>
        <Item.Content>
        <Item.Header as='a'>제목 : {book.title}</Item.Header>
        <Item.Meta>가격 : {book.price}</Item.Meta>
        <Item.Extra>저자 : {book.author}</Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default BookItemView;