import { makeAutoObservable, makeObservable, observable } from "mobx"
import Books from "../Books";



class BookStore {
  book =Books[0]//object
  books =Books; //배열

 constructor(){
   makeAutoObservable(this)
 }

  // constructor(book, books){
  //   makeObservable(this, {
  //     book: observable,
  //     books: observable
  //   });
  //    this.book = book;
  //    this.books = books
  // }


// action
  selectBook=(book)=>{
    this.book = book;
  }
}
export default new BookStore();