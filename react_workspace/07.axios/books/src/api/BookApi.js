import axios from 'axios';

class BookApi{


URL = '/api/book/'

bookList(){
  return axios.get(this.URL)
              .then((response)=>response.data);
}


bookDetail(id){
  return axios.get(this.URL + `${id}/`)
              .then((response)=>response.data);
}

bookCreate(book){
  return axios.post(this.URL + 'create/',
  {isbn : `${book.isbn}`, 
  title : `${book.title}`, 
  author : `${book.author}`, 
  publisher : `${book.publisher}`, 
  imgUrl : `${book.imgUrl}`,  
  price : `${book.price}`,
  introduce : `${book.introduce}`})
              .then((response)=>response.data);
}
 
bookUpdate(id,book){
  return axios.put(this.URL + `update/${id}/`,
          {isbn : `${book.isbn}`, 
          title : `${book.title}`, 
          author : `${book.author}`, 
          publisher : `${book.publisher}`, 
          imgUrl : `${book.imgUrl}`,  
          price : `${book.price}`,
          introduce : `${book.introduce}`}) //method put
                  .then((response)=>response.data);
}

bookDelete(id){
  return axios.delete(this.URL+`delete/${id}/`) //method delete
  .then((response)=>response.data);
}

bookSearch(keyword){
  return axios.search(this.URL+ `search/${keyword}/` , {keyword :`${keyword}` })
  .then((response)=>response.data);
}

}
export default new  BookApi();