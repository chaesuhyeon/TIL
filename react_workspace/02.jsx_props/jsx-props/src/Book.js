import React, { Component } from 'react';

class Book extends Component {
  render() {
    const {isbn, author, title} = this.props;

    return (
      <div>
        <h2>{isbn}</h2>
        <p>
          <span>제목 : {title}</span><br></br>
          <span>저자 : {author}</span> 
       
        </p>
      </div>
    );
  }
}

export default Book;