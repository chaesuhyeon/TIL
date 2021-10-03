import { makeAutoObservable, runInAction } from "mobx"

import bookApi from "../api/BookApi";

// .isbn, this.book.title, this.book.author, this.book.publisher, this.book.price, this.book.imgURL, this.book.introduce

class BookStore {
  book = {
    id: 0,
    isbn: "",
    title: "",
    author: "",
    publisher: "",
    price: "",
    imgUrl: "",
    introduce: "",
  };
  keyword = ""
  books =[]; //배열

 constructor(){
   makeAutoObservable(this,{},{autoBind:true})
 }

// action
  async selectBook(book){
    try{
      const result = await bookApi.bookDetail(book.id);
      runInAction(()=> this.book = result);

    } catch(error){
     console.log(error);
    }
  }

 SeachBookKeyword(value){
    this.keyword = value
 }

 async bookSearch(){
  try{
    const results = await bookApi.bookSearch(this.keyword);
    runInAction(()=> this.books= results)
  } catch(error){
    console.log(error)
  }
  this.init()
 }

//input칸에 데이터 뿌리기 
 selectKeyword(book){
  this.book = book
 }


async bookAdd(){
  try {
    await bookApi.bookCreate(this.book);
    console.log(this.book)
    this.selectAll();
  } catch(error){
    runInAction(this.message = error.message);
  }
  this.init()
}

async bookRemove() {
  try {
    await bookApi.bookDelete(this.book.id);
    this.selectAll();
  } catch(error){
    runInAction(this.message = error.message);
  }

  this.init()
}

async bookModify() {
  try {
    await bookApi.bookUpdate(this.book.id, this.book);
    this.selectAll();
  } catch(error){
    runInAction(this.message = error.message);
  }
  this.init()
}


setProps(name,value){
  console.log(name,value)
  this.book = {...this.book, [name]:value}
}



  async selectAll(){
    try{
      const results = await bookApi.bookList();
      runInAction(()=> this.books= results)
    } catch(error){
      console.log(error)
    }
  }

  init(){
    this.book = {id : "" , isbn:"",  title : "", author : "", publisher: "", price: "", imgUrl: "", introduce: ""}
  }





}

export default new BookStore();