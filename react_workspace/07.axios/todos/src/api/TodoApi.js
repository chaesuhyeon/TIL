import axios from 'axios';


// 어떤  url로 파라미터로는 뭘 전달하고 리스폰스 되는 데이터는 뭔지 , 이런것들이 api설계서에 저장이 되어있어야지  백엔트와 프론트엔드를 작성할 수 있음
class todoApi{

URL = '/api/todo/'

// 127.0.0.1:8000/api/todo/
  todoList(){
    return axios.get(this.URL)  //method get
              .then((response)=>response.data);
  }
 
// 127.0.0.1:8000/api/todo/id
  todoDetail(id){
    //id는 pk값  

    return axios.get(this.URL + `${id}/`) // 자바스크립트에서 변수 참조는 백쿼트 ` 와 $, {}필요 url 경로때문에 뒤에 /로 붙여줌  //method get
              .then((response)=>response.data);
  }


// 127.0.0.1:8000/api/todo/creat/
  todoCreate(title){
    // 생성할 데이터 title , id는 자동으로 제너레이트 돼서 생성되고 있음 
    
    return axios.post(this.URL + 'create/', {title : `${title}`}) //method post
              .then((response)=>response.data);
  }

// 127.0.0.1:8000/api/todo/update/id
  todoUpdate(id, title){
    //update할 id와 데이터 - title

    return axios.put(this.URL + `update/${id}/`, {title:`${title}`}) //method put
              .then((response)=>response.data);
  }

// 127.0.0.1:8000/api/todo/delete/id 
  todoDelete(id){
    // 삭제할 id

    return axios.delete(this.URL+`delete/${id}/`) //method delete
              .then((response)=>response.data);
  }

}

export default new todoApi();