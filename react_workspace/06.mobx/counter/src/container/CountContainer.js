import React, { Component } from 'react';
import {observer} from 'mobx-react';
import Counter from '../store/Counter';


class CountContainer extends Component {
  counterStore = Counter; 
  render() {
    return (
      <div>
        <h2>Counter : {this.counterStore.counter}</h2>
         <button onClick={() => this.counterStore.increase()}>ADD(+)</button>
         <button onClick={() => this.counterStore.decrease()}>MINUS(-)</button>
      </div>
    );
  }
}


export default observer(CountContainer); // observer 객체등록 : observerable state변경