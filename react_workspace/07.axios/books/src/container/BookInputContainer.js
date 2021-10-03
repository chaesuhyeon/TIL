import { Component } from "react";
import BookStore from '../store/BookStore';
import { observer} from 'mobx-react'

class BookInputContainer extends Component{
  bookStore = BookStore;

  render(){
    const {book , keyword, setProps , SeachBookKeyword , bookAdd , bookRemove , bookModify , bookSearch  } = this.bookStore
    return (
      <div>
        <input type="text" name = "keyword" placeholder="Search..." value={keyword} onChange = {(e)=>SeachBookKeyword(e.target.value)}/>
        <button onClick={()=>bookSearch(keyword)}>SEARCH</button> <br/>
        <input type="text" name ="isbn" placeholder="isbn" value={book.isbn} onChange = {(e)=>setProps(e.target.name, e.target.value)} /> <br/>
        <input type="text" name ="title" placeholder="title"  value={book.title} onChange = {(e)=>setProps(e.target.name, e.target.value)}/><br/>
        <input type="text" name ="author" placeholder="author" value={book.author} onChange = {(e)=>setProps(e.target.name, e.target.value)} /><br/>
        <input type="text" name ="publisher" placeholder="publisher"  value={book.publisher} onChange = {(e)=>setProps(e.target.name, e.target.value)}/><br/>
        <input type="number" name ="price" placeholder="price" value={book.price} onChange = {(e)=>setProps(e.target.name, e.target.value)} /><br/>
        <input type="text" name ="imgUrl" placeholder="imgUrl" value={book.imgUrl} onChange = {(e)=>setProps(e.target.name, e.target.value)}/><br/>
        <input type="text" name ="introduce" placeholder="introduce"  value={book.introduce} onChange = {(e)=>setProps(e.target.name, e.target.value)}/><br/>
        <button onClick={()=>bookAdd()}>ADD</button> &nbsp; 
      <button onClick={()=>bookRemove()}>REMOVE</button> &nbsp; 
      <button onClick={()=>bookModify()}>MODIFY</button>
      </div>

    )
  }

}

export default observer(BookInputContainer);