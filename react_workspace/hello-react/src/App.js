// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { Component } from 'react';

// 변수 선언 : 상수 const 변수 let
//변수 참조 : {변수명}
// {javascript 표현식도 가능}
class App extends Component {

 formatName(user) {
    return user.firstName + ' ' + user.lastName
  }
  render() {
  
    const hi = "안녕하세요";

    const user = {
      firstName :'Cloud',
      lastName : 'MSA'
    }
    return (
      <div>
        <h1>{hi}, {this.formatName(user)}</h1>
      </div>
    );
  }
}

export default App;
// export default App;
