import React, { Component } from 'react';

import TodoInputContainer from './container/TodoInputContainer';
import TodoListContainer from './container/TodoListContainer';


class App extends Component {

  render() {
   
    return (
      <div>
       <TodoInputContainer/>
        <TodoListContainer/>
 
      </div>
    );
  }
}

export default App;
