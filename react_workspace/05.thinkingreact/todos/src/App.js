import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import generateId from './IDGenerator';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo : {id:"", title:""},
      todos : [{"id":"1111", "title":"일정1"},{"id":"1112", "title":"일정2"}] // 배열로 초기화
    }
  }

  // 일정등록 : id generator 생성해서 todos 상태값 변경(추가 id,title)
  handlerAdd=(title)=>{
    const {todo,todos} = this.state;
    this.setState({
      todo : todo,
      todos : todos.concat({...todo, id: generateId(5)})
    }
    )
  }
  //일정 선택 : 선택된 일정으로 todo상태값 변경
  handlerSelect = (id) => {
    const {todos} = this.state;
    this.setState({
      todo : todos.find((element)=>element.id === id)
    })
  }

  //일정삭제 : 선택된 일정 todos 상태값 변경(삭제)
  handlerRemove = (id) => {
    const {todo, todos} = this.state;
    this.setState({
      todos : todos.filter((element)=> element.id !== todo.id)
    })
  }

  // 일정수정 : 선택된 일정 todos 상태값 변경(수정)
  handlerModify=() => {
    const {todo, todos} = this.state;
    this.setState({
      todos : todos.map((element)=>(element.id === todo.id ? todo:element))
    })
  }

  // textfield에 입력한 title값과 같이  id generator로 생성해서 todo상태값 변경 
  //  handlerSetTodo=(value) => {
  //    this.setState({
  //      todo:{...this.state.todo , title:value}
  //    })
  //  }

  // 날짜 있을 경우 
  // handlerSetTodoDate = (date) => {
  //   this.setState({
  //     todo : {...this.state.todo , date:date}
  //   })
  // }
  // }

  //{id:"", title:"", contents:"", date:""} 
  handlerSetProps = (name, value)=>{
    this.setState({
      todo : {...this.state.todo, [name]:value} // 기존 properties에 name:value만 수정 
    })
  }

  render() {
    const {todo} = this.state
    return (
      <div>
        <TodoInput onAdd={this.handlerAdd} todo={todo} onRemove={this.handlerRemove} onModify={this.handlerModify} onSetProps={this.handlerSetProps} />
        <TodoList todos={this.state.todos} onSelect={this.handlerSelect}/>
      </div>
    );
  }
}

export default App;
